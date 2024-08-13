import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'
import { Autoplay, EffectFade } from 'swiper/modules'

const Hero = () => {
  return (
    <div className='hero-section h-56 md:h-screen'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 2000 }}
        speed={2500} // Adjust the transition speed here
        fadeEffect={{ crossFade: true }} // Enables a smooth crossfade effect
        loop={true}
        className='h-full w-full'
      >
        <SwiperSlide>
          <img
            src='/img1.jpg'
            alt='Image 1'
            className='object-cover w-full h-full animate-zoom-in'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/img3.jpg'
            alt='Image 3'
            className='object-cover w-full h-full animate-move-right'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/img2.jpg'
            alt='Image 2'
            className='object-cover w-full h-full animate-move-left'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/img4.jpg'
            alt='Image 4'
            className='object-cover w-full h-full animate-zoom-in'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
