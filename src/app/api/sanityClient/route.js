import { NextResponse } from 'next/server'

export async function GET() {
  const sanityConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2023-01-01', // Replace with your preferred API version
    useCdn: true, // Set to `true` for production builds if you want to use the CDN
  }
  return NextResponse.json(sanityConfig)
}
