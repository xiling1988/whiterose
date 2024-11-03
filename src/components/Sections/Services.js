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
    <div id='services' className='bg-canvas bg-fill bg-repeat'>
      <div className='bg-canvas-base h-1 w-full mt-4'></div>
      <div className='mx-auto md:mt-0 max-w-xl px-4 py-10 sm:px-6 sm:py-24 md:max-w-7xl md:px-8'>
        <h2 className='text-4xl font-austen font-bold tracking-tight text-darkCream'>
          Our Services
        </h2>
        <p className='mt-4 text-base text-canvas-3'>
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className='mt-10 space-y-12 md:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
          {services.map((service) => (
            <div key={service.title} className='group block mb-4'>
              <h4 className='md:hidden font-austen text-xl p-1 text-darkCream'>
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
                  className='h-full w-full object-cover object-center md:group-hover:opacity-75 md:group-hover:sepia md:group-hover:blur-md transition-all duration-300'
                />
                <div className='hidden absolute inset-0  flex-col items-center justify-center p-3 md:group-hover:flex transition-all duration-300'>
                  <h4 className='font-bold underline text-lg font-austen text-gray-800'>
                    {service.title}
                  </h4>
                  <p className='mt-2 text-md text-center font-bold text-gray-800 '>
                    {service.description}
                  </p>
                </div>
                <p className='md:hidden mt-2 text-lg font-bold text-canvas-3 '>
                  {service.description}
                </p>
              </div>
              <div className='md:group-hover:hidden'>
                <h3 className='hidden underline md:block mt-4 text-base font-semibold text-canvas-3'>
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
