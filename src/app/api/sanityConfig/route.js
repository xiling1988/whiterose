import { NextResponse } from 'next/server'

export async function GET() {
  const config = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
  }
  return NextResponse.json(config)
}
