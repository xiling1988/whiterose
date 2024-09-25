import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

async function getSanityConfig() {
  const res = await fetch('/api/sanityConfig')
  if (!res.ok) {
    throw new Error('Failed to fetch Sanity configuration')
  }
  return res.json()
}

export async function createSanityConfig() {
  const sanityConfig = await getSanityConfig()

  return defineConfig({
    name: 'default',
    title: 'Sanity - White Rose Design',

    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    basePath: '/studio',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  })
}
