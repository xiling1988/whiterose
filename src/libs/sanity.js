import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  // projectId: 'avbw49jf',
  dataset: process.env.SANITY_DATASET,
  // dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_STUDIO_TOKEN, // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export default client

//////////////////////////    QUERIES   ///////////////////////////////
