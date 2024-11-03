// 'use client'
import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'
import { initializeSanityClient } from '@/libs/sanity'

// export const revalidate = 86400 // Revalidate every hour

const Home = async () => {
  const client = await initializeSanityClient()
  const heroImages = await client.fetch(
    `*[_type == "heroImage"]{
      _id,
      altText,
      "imageUrl": image.asset->url
    }`,
    {
      next: { revalidate: 86400 },
    }
  )
  console.log('Hero Images: ', heroImages)

  // const services = await client.fetch(
  //   `*[_type == "service"] | order(orderRank){
  //     title,
  //     description,
  //     "imageUrl": image.asset->url,
  //     altText
  //   }`
  // )

  return (
    <>
      <Hero images={heroImages} />
      {/* <Services services={services} /> */}
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}

export default Home
