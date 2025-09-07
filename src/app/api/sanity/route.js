import { NextResponse } from 'next/server';
import { client } from '@/sanityClient'; // Sesuaikan path kalau pake root

export async function GET() {
  try {
    const data = await client.fetch('*[_type == "section"] | order(order asc)');
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Sanity data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}