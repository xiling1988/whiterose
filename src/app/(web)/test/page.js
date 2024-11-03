import { initializeSanityClient } from '@/libs/sanity'

export const revalidate = 86400

const page = async () => {
  const client = await initializeSanityClient()

  const minimalData = await client.fetch(`*[_type == "heroImage"]{ _id }`, {
    next: { revalidate: 86400 },
  })
  const data = await minimalData

  console.log('Minimal Data:', data) // Log for debugging

  return <div>hello: {data[0]._id}</div>
}

export default page
