import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

// Sanity Studio configuration only; no data fetching here
export default defineConfig({
  name: 'default',
  title: 'Sanity - White Rose Design',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  basePath: '/studio',
  useCdn: false,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
