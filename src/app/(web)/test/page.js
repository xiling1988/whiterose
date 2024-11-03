import { initializeSanityClient } from '@/libs/sanity'

export const revalidate = 86400

const page = async () => {
  const client = await initializeSanityClient()

  const minimalData = await client.fetch(`*[_type == "heroImage"]{ _id }`, {
    next: { revalidate: 86400 },
  })

  console.log('Minimal Data:', minimalData) // Log for debugging

  return <div>Minimal data fetch with ISR enabled.</div>
}

export default page
