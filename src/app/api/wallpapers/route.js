import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 20;

        const wallpapersDir = path.join(process.cwd(), 'public', 'wallpapers');

        if (!fs.existsSync(wallpapersDir)) {
            return NextResponse.json({
                success: true,
                images: [],
                pagination: {
                    total: 0,
                    page,
                    limit,
                    totalPages: 0
                }
            });
        }

        const files = fs.readdirSync(wallpapersDir);

        // Filter for image files only
        const imageFiles = files.filter(file =>
            /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
        );

        const total = imageFiles.length;
        const totalPages = Math.ceil(total / limit);
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        
        const paginatedFiles = imageFiles.slice(startIndex, endIndex);

        // Create relative URLs
        // The client (Flutter app) will prepend the correct base URL (http://10.0.2.2:3000 or production URL)
        const imageUrls = paginatedFiles.map(file => `/wallpapers/${file}`);

        return NextResponse.json({
            success: true,
            images: imageUrls,
            pagination: {
                total,
                page,
                limit,
                totalPages
            }
        });

    } catch (error) {
        console.error('Error reading wallpapers directory:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch wallpapers' },
            { status: 500 }
        );
    }
}
