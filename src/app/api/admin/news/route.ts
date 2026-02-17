import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { isAuthenticated } from '@/lib/auth';
import { put, list } from '@vercel/blob';

export const dynamic = 'force-dynamic';

const NEWS_FILE_PATH = join(process.cwd(), 'data', 'news.json');
const NEWS_BLOB_PATH = 'news/data.json';

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content?: string;
  bannerImage?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

async function readNewsFile(): Promise<NewsArticle[]> {
  try {
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    const isVercel = process.env.VERCEL === '1';

    if (blobToken && isVercel) {
      // Production: Read from Vercel Blob Storage
      try {
        // Try to get the blob URL by constructing it
        // First, try to list and find the blob
        const blobList = await list({ prefix: 'news/' });
        const newsBlob = blobList.blobs.find(blob => blob.pathname === NEWS_BLOB_PATH);
        
        if (newsBlob) {
          const response = await fetch(newsBlob.url);
          if (response.ok) {
            const data = await response.json();
            return Array.isArray(data) ? data : [];
          }
        }
        return [];
      } catch (blobError) {
        console.error('Error reading from blob storage:', blobError);
        // If blob doesn't exist yet, return empty array (first time)
        return [];
      }
    } else {
      // Development: Read from local file
      if (!existsSync(NEWS_FILE_PATH)) {
        return [];
      }
      const fileContent = await readFile(NEWS_FILE_PATH, 'utf-8');
      return JSON.parse(fileContent);
    }
  } catch (error) {
    console.error('Error reading news:', error);
    return [];
  }
}

async function writeNewsFile(news: NewsArticle[]): Promise<void> {
  try {
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    const isVercel = process.env.VERCEL === '1';

    if (blobToken && isVercel) {
      // Production: Write to Vercel Blob Storage
      const jsonContent = JSON.stringify(news, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json' });
      await put(NEWS_BLOB_PATH, blob, {
        access: 'public',
        contentType: 'application/json',
      });
    } else {
      // Development: Write to local file
      const dataDir = join(process.cwd(), 'data');
      if (!existsSync(dataDir)) {
        await mkdir(dataDir, { recursive: true });
      }
      await writeFile(NEWS_FILE_PATH, JSON.stringify(news, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error('Error writing news:', error);
    throw error;
  }
}

// GET - Public endpoint to fetch all news
export async function GET() {
  try {
    const news = await readNewsFile();
    // Sort by date (newest first)
    const sortedNews = news.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return NextResponse.json(sortedNews, { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news', news: [] },
      { 
        status: 200, // Return 200 with empty array to prevent breaking the UI
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

// POST - Create new article (admin only)
export async function POST(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, excerpt, content, date, bannerImage, featured } = body;

    if (!title || !excerpt || !date) {
      return NextResponse.json(
        { error: 'Title, excerpt, and date are required' },
        { status: 400 }
      );
    }

    const news = await readNewsFile();
    const newArticle: NewsArticle = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      title,
      excerpt,
      content: content || '',
      date,
      bannerImage: bannerImage || '',
      featured: featured === true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    news.push(newArticle);
    await writeNewsFile(news);

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error: unknown) {
    console.error('Error creating news:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to create news article',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

// PUT - Update article (admin only)
export async function PUT(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id, title, excerpt, content, date, bannerImage, featured } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    const news = await readNewsFile();
    const articleIndex = news.findIndex((article) => article.id === id);

    if (articleIndex === -1) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    // Update article
    news[articleIndex] = {
      ...news[articleIndex],
      title: title || news[articleIndex].title,
      excerpt: excerpt || news[articleIndex].excerpt,
      content: content !== undefined ? content : news[articleIndex].content,
      date: date || news[articleIndex].date,
      bannerImage: bannerImage !== undefined ? bannerImage : news[articleIndex].bannerImage,
      featured: featured !== undefined ? featured : news[articleIndex].featured,
      updatedAt: new Date().toISOString(),
    };

    await writeNewsFile(news);

    return NextResponse.json(news[articleIndex], { status: 200 });
  } catch (error: unknown) {
    console.error('Error updating news:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to update news article',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete article (admin only)
export async function DELETE(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    const news = await readNewsFile();
    const filteredNews = news.filter((article) => article.id !== id);

    if (filteredNews.length === news.length) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    await writeNewsFile(filteredNews);

    return NextResponse.json(
      { message: 'Article deleted successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error deleting news:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to delete news article',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

