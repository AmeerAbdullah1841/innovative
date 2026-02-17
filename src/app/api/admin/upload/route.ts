import { NextRequest, NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { isAuthenticated } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = file.name.split('.').pop();
    const fileName = `${timestamp}-${randomString}.${fileExtension}`;

    // Check if we're on Vercel and have blob token configured
    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    const isVercel = process.env.VERCEL === '1';

    // Try Vercel Blob Storage first if on Vercel
    if (isVercel) {
      if (!blobToken) {
        return NextResponse.json(
          { 
            error: 'Blob storage not configured',
            message: 'BLOB_READ_WRITE_TOKEN environment variable is required for file uploads on Vercel.',
            instruction: 'Please set BLOB_READ_WRITE_TOKEN in Vercel Dashboard → Settings → Environment Variables'
          },
          { status: 500 }
        );
      }

      try {
        // Production: Upload to Vercel Blob Storage
        // The put function automatically reads BLOB_READ_WRITE_TOKEN from env
        const blob = await put(`news/${fileName}`, file, {
          access: 'public',
          contentType: file.type,
        });

        return NextResponse.json(
          { url: blob.url, fileName: blob.pathname },
          { status: 200 }
        );
      } catch (blobError: unknown) {
        console.error('Blob storage error:', blobError);
        const errorMessage = blobError instanceof Error ? blobError.message : 'Unknown blob storage error';
        return NextResponse.json(
          { 
            error: 'Failed to upload to blob storage',
            message: errorMessage,
            details: 'Check Vercel function logs for more details'
          },
          { status: 500 }
        );
      }
    } else {
      // Development: Save to local filesystem
      try {
        const uploadsDir = join(process.cwd(), 'public', 'uploads', 'news');
        if (!existsSync(uploadsDir)) {
          await mkdir(uploadsDir, { recursive: true });
        }

        const filePath = join(uploadsDir, fileName);
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await writeFile(filePath, buffer);

        const publicUrl = `/uploads/news/${fileName}`;

        return NextResponse.json(
          { url: publicUrl, fileName },
          { status: 200 }
        );
      } catch (fsError: unknown) {
        console.error('Filesystem error:', fsError);
        const errorMessage = fsError instanceof Error ? fsError.message : 'Unknown filesystem error';
        return NextResponse.json(
          { 
            error: 'Failed to save file',
            message: errorMessage
          },
          { status: 500 }
        );
      }
    }
  } catch (error: unknown) {
    console.error('Upload error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}

