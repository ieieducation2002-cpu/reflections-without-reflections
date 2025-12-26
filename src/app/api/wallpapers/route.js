import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
    try {
        const wallpapersDir = path.join(process.cwd(), 'public', 'wallpapers');

        if (!fs.existsSync(wallpapersDir)) {
            return NextResponse.json({ success: true, images: [] });
        }

        const files = fs.readdirSync(wallpapersDir);

        // Filter for image files only
        const imageFiles = files.filter(file =>
            /\.(png|jpg|jpeg|webp|gif)$/i.test(file)
        );

        // Create relative URLs
        // The client (Flutter app) will prepend the correct base URL (http://10.0.2.2:3000 or production URL)
        const imageUrls = imageFiles.map(file => `/wallpapers/${file}`);

        return NextResponse.json({
            success: true,
            images: imageUrls
        });

    } catch (error) {
        console.error('Error reading wallpapers directory:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch wallpapers' },
            { status: 500 }
        );
    }
}
