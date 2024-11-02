'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { Autoplay, EffectFade } from 'swiper/modules'
import MidSection from './MidSection'
import Image from 'next/image'

const Hero = ({ images }) => {
  return (
    <div className='hero-section h-70 md:h-screen relative'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 2000 }}
        speed={2500} // Adjust the transition speed here
        fadeEffect={{ crossFade: true }} // Enables a smooth crossfade effect
        loop={true}
        className='h-5/6 w-full'
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <Image
              width={100}
              height={100}
              unoptimized
              src={image.imageUrl}
              alt={image.altText}
              className='object-cover h-full w-full'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <MidSection />
    </div>
  )
}

export default Hero
