// 'use client'
import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'
import { initializeSanityClient } from '@/libs/sanity'

export default async function Home() {
  const client = await initializeSanityClient()
  const heroImages = await client.fetch(
    `*[_type == "heroImage"]{
      _id,
      altText,
      "imageUrl": image.asset->url
    }`
  )
  // const heroImages = await client.fetch(
  //   `*[_type == "heroImage"]{ _id, imageUrl: image.asset->url }`,
  //   { next: { revalidate: 3600 } }
  // )
  const services = await client.fetch(
    `*[_type == "service"]{
      title,
      description,
      "imageUrl": image.asset->url,
      altText
    }`,
    { next: { revalidate: 3600 } }
  )

  return (
    <>
      <Hero images={heroImages} />
      <Services services={services} />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}
