import Image from 'next/image'
const Services = ({ services }) => {
  // console.log(services)
  // useEffect(() => {
  //   const fetchServices = async () => {
  //     try {
  //       const client = await initializeSanityClient()
  //       const data = await client.fetch(`*[_type == "service"]{
  //         title,
  //         description,
  //         "imageUrl": image.asset->url,
  //         altText,
  //       }`)
  //       setServices(data)
  //     } catch (error) {
  //       console.error('Error fetching services:', error)
  //     }
  //   }

  //   fetchServices()
  // }, [])

  return (
    <div className='bg-canvas bg-cover bg-center'>
      <div className='mx-auto mt-8 md:mt-0 max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-austen font-bold tracking-tight text-gray-900'>
          Our Services
        </h2>
        <p className='mt-4 text-base text-gray-500'>
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className='mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
          {services.map((service) => (
            <div key={service.title} className='group block mb-4'>
              <h4 className='md:hidden font-austen text-xl p-1'>
                {service.title}
              </h4>
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
                <div className='hidden absolute inset-0  flex-col items-center justify-center p-3 md:group-hover:flex transition-all duration-300'>
                  <h4 className='font-bold font-austen'>{service.title}</h4>
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
