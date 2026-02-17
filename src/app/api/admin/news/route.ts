import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { isAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

const NEWS_FILE_PATH = join(process.cwd(), 'data', 'news.json');

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
    if (!existsSync(NEWS_FILE_PATH)) {
      return [];
    }
    const fileContent = await readFile(NEWS_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading news file:', error);
    return [];
  }
}

async function writeNewsFile(news: NewsArticle[]): Promise<void> {
  try {
    await writeFile(NEWS_FILE_PATH, JSON.stringify(news, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing news file:', error);
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
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: 'Failed to create news article' },
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
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { error: 'Failed to update news article' },
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
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { error: 'Failed to delete news article' },
      { status: 500 }
    );
  }
}

