import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import * as dotenv from 'dotenv'

// Load environment variables from .env.local
dotenv.config()

const projectId = process.env.SANITY_PROJECT_ID // Provide default if undefined
const dataset = process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    'Missing required environment variables for Sanity configuration'
  )
}

// Sanity Studio configuration only; no data fetching here
export default defineConfig({
  name: 'default',
  title: 'Sanity - White Rose Design',

  projectId,
  dataset,
  basePath: '/studio',
  useCdn: false,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
