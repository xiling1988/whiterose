// 'use client'
import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'
import { initializeSanityClient } from '@/libs/sanity'

const Home = async () => {
  const client = await initializeSanityClient()
  const data = await client.fetch(
    `{
      "heroImages": *[_type == "heroImage"] | order(orderRank) {
        _id,
        altText,
        "imageUrl": image.asset->url
      },
      "services": *[_type == "service"] | order(orderRank) {
        title,
        description,
        "imageUrl": image.asset->url,
        altText
      }
    }`,
    { next: { revalidate: 3600 } }
  )

  const { heroImages, services } = data

  // const heroImages = await client.fetch(
  //   `*[_type == "heroImage"] | order(orderRank){
  //     _id,
  //     altText,
  //     "imageUrl": image.asset->url
  //   }`,
  //   {
  //     next: { revalidate: 3600 },
  //   }
  // )
  // console.log('Hero Images: ', heroImages)

  // const services = await client.fetch(
  //   `*[_type == "service"] | order(orderRank){
  //     title,
  //     description,
  //     "imageUrl": image.asset->url,
  //     altText
  //   }`,
  //   {
  //     next: { revalidate: 3600 },
  //   }
  // )

  return (
    <>
      <Hero images={heroImages} />
      <Services services={services} />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}

export default Home
