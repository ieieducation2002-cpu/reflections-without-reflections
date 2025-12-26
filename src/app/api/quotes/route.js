import { NextResponse } from 'next/server';

// Sample quotes data
const quotes = [
    {
        id: 1,
        sinhala: 'ඔබ ඔබට පැන්සලක් සහ තිස් පිටු කිතියක් දී ඇත. පොත ලියා ගත යුත්තේ ඔබ විසිත්ඹය.',
        english: "I've given you a pencil and blank pages. The book must be written by yourself.",
        author: {
            sinhala: 'බණ්ඩාරවෙල වංගීස හිමි',
            english: 'Bandarawela Wangeesa Thero'
        }
    },
    // Add more quotes here
];

// GET - Fetch all quotes or a random quote
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const random = searchParams.get('random');

    if (random === 'true') {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return NextResponse.json(randomQuote);
    }

    return NextResponse.json(quotes);
}

// POST - Add a new quote (example)
export async function POST(request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.sinhala || !body.english) {
            return NextResponse.json(
                { error: 'Sinhala and English text are required' },
                { status: 400 }
            );
        }

        const newQuote = {
            id: quotes.length + 1,
            sinhala: body.sinhala,
            english: body.english,
            author: body.author || {
                sinhala: 'Unknown',
                english: 'Unknown'
            }
        };

        quotes.push(newQuote);

        return NextResponse.json(newQuote, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid request body' },
            { status: 400 }
        );
    }
}
