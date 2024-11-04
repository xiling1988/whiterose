import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'
import { initializeSanityClient } from '@/libs/sanity'

const Home = async () => {
  const client = await initializeSanityClient()

  const services = await client.fetch(
    `*[_type == "service"] | order(orderRank){
      title,
      description,
      "imageUrl": image.asset->url,
      altText
    }`,
    {
      next: { revalidate: 3600 },
    }
  )

  return (
    <>
      <Hero />
      <Services services={services} />
      {/* <Portfolio /> */}
      <Contact />
    </>
  )
}

export default Home
