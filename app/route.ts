import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const htmlContent = readFileSync(
      join(process.cwd(), 'public', 'cineverse-template.html'),
      'utf-8'
    );

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  } catch (error) {
    return new NextResponse('Error loading page', { status: 500 });
  }
}
