import { defineConfig } from 'sanity'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    'Missing required environment variables for Sanity configuration'
  )
}

export default defineConfig({
  name: 'default',
  title: 'Sanity - White Rose Design',

  projectId,
  dataset,
  basePath: '/studio',
  // useCdn: true,

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            // Orderable list for Services
            orderableDocumentListDeskItem({
              type: 'service',
              title: 'Services',
              S,
              context,
            }),
            // Orderable list for Hero Images
            orderableDocumentListDeskItem({
              type: 'heroImage',
              title: 'Hero Images',
              S,
              context,
            }),
            // Individual items for blog-related schemas
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('author').title('Authors'),
            S.documentTypeListItem('category').title('Categories'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
