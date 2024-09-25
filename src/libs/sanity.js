import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { createSanityConfig } from '../../sanity.config'

let client
let sanityConfig

export async function initializeSanityClient() {
  if (!client) {
    const sanityConfig = await createSanityConfig()
    client = createClient(sanityConfig)
    console.log('CLIENT: ', client)
  }
  return client
}

export async function getSanityConfig() {
  if (!sanityConfig) {
    sanityConfig = await createSanityConfig()
  }
  return sanityConfig
}

// client = createClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   useCdn: true, // set to `false` to bypass the edge cache
//   apiVersion: '2024-05-03', // use current date (YYYY-MM-DD) to target the latest API version
//   // token: process.env.SANITY_STUDIO_TOKEN, // Only if you want to update content with the client
// })

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// export default initializeSanityClient

//////////////////////////    QUERIES   ///////////////////////////////
