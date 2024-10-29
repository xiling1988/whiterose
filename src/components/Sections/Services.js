import { useEffect, useState } from 'react'
import { initializeSanityClient } from '@/libs/sanity'
import Image from 'next/image'

const categories = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:
      'Keep your phone, keys, and wallet together, so you can lose everything at once.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:
      'The rest of the house will still be a mess, but your desk will look great.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:
      'Be more productive than enterprise project managers with a single piece of paper.',
  },
]

const Services = () => {
  const [services, setServices] = useState([])
  console.log(services)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const client = await initializeSanityClient()
        const data = await client.fetch(`*[_type == "service"]{
          title,
          description,
          "imageUrl": image.asset->url,
          altText,
        }`)
        setServices(data)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchServices()
  }, [])

  console.log(services)

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Our Services
        </h2>
        <p className='mt-4 text-base text-gray-500'>
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className='mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
          {services.map((service) => (
            <div key={service.title} className='group block'>
              <h4 className='text-xl p-1'>{service.title}</h4>
              <div
                aria-hidden='true'
                className='relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5'
              >
                <Image
                  unoptimized
                  height={100}
                  width={100}
                  alt={service.title}
                  src={service.imageUrl}
                  className='h-full w-full object-cover object-center md:group-hover:opacity-75 md:group-hover:grayscale md:group-hover:blur-md transition-all duration-300'
                />
                <div className='hidden absolute inset-0  flex-col items-center justify-center p-3 md:group-hover:flex'>
                  <h4 className='font-bold'>{service.title}</h4>
                  <p className=' mt-2 text-lg text-center font-bold text-black '>
                    {service.description}
                  </p>
                </div>
                <p className='md:hidden mt-2 text-lg font-bold text-black '>
                  {service.description}
                </p>
              </div>
              <div className='md:group-hover:hidden'>
                <h3 className='hidden md:block mt-4 text-base font-semibold text-gray-900'>
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
