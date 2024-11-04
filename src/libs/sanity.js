import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

let client

export async function initializeSanityClient() {
  if (!client) {
    client = createClient({
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      apiVersion: '2023-10-29',
      useCdn: true,
    })
  }
  return client
}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// export default initializeSanityClient

//////////////////////////    QUERIES   ///////////////////////////////
