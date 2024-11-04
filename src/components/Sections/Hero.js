'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { Autoplay, EffectFade } from 'swiper/modules'
import MidSection from './MidSection'
import Image from 'next/image'
import { initializeSanityClient } from '@/libs/sanity'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [images, setImages] = useState(null) // null indicates loading state
  console.log(images)
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const client = await initializeSanityClient()
        const heroImages = await client.fetch(
          `*[_type == "heroImage"] | order(orderRank){
            _id,
            altText,
            "imageUrl": image.asset->url
          }`
        )
        setImages(heroImages)
      } catch (error) {
        console.error('Error fetching hero images:', error)
      }
    }
    fetchImages()
  }, [])

  return (
    <div id='/' className='hero-section h-70 w-screen md:h-screen relative'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 2000 }}
        speed={2500} // Adjust the transition speed here
        fadeEffect={{ crossFade: true }} // Enables a smooth crossfade effect
        loop={true}
        className='md:h-5/6 w-full'
      >
        {images ? (
          images.map((image) => (
            <SwiperSlide key={image._id}>
              <Image
                width={100}
                height={100}
                unoptimized
                src={image.imageUrl}
                alt={image.altText}
                className='object-cover object-center h-full w-full'
              />
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <Image
                width={100}
                height={100}
                unoptimized
                src='/hero.jpg'
                alt='Hero Image'
                className='object-cover object-center h-full w-full'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={100}
                height={100}
                unoptimized
                src='/hero.jpg'
                alt='Hero Image'
                className='object-cover object-center h-full w-full'
              />
            </SwiperSlide>
          </>
        )}
      </Swiper>
      <MidSection />
    </div>
  )
}

export default Hero
