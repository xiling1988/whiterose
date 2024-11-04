import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [state, handleSubmit] = useForm('meoqabjz')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(e)
    // Submit the form data (e.g., send to an API)
    console.log(formData)
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <div id='contact' className='relative bg-white'>
      <div className='lg:absolute lg:inset-0 lg:left-1/2'>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80'
          className='h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full'
        />
      </div>
      <div className='pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32'>
        <div className='px-6 lg:px-8 bg-white'>
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg '>
            <h2 className='text-3xl font-austen font-bold tracking-tight text-cream'>
              Let's work together
            </h2>
            <p className='mt-2 text-lg leading-8 text-canvas-3'>
              Join us in for a complimentary 45-minute consultation in our
              Design Studio with our design team to discuss the specifics of
              your project in more detail.
            </p>
            <button
              type='submit'
              className='rounded-md mt-2 bg-cream px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cream hover:text-canvas-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkCream'
            >
              Send message
            </button>
            <p className='mt-10 text-lg leading-8 text-canvas-3'>
              Or send us your thoughts and queries here:
            </p>
            <form onSubmit={onSubmit} className='mt-16'>
              <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-canvas-3'
                  >
                    Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      required
                      onChange={handleChange}
                      value={formData.name}
                      id='name'
                      name='name'
                      type='text'
                      autoComplete='name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-canvas-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkCream sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-semibold leading-6 text-canvas-3'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      required
                      onChange={handleChange}
                      value={formData.email}
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-canvas-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkCream sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between text-sm leading-6'>
                    <label
                      htmlFor='phone'
                      className='block font-semibold text-canvas-3'
                    >
                      Phone
                    </label>
                  </div>
                  <div className='mt-2.5'>
                    <input
                      required
                      onChange={handleChange}
                      value={formData.phone}
                      id='phone'
                      name='phone'
                      type='tel'
                      autoComplete='tel'
                      aria-describedby='phone-description'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-canvas-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkCream sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between text-sm leading-6'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-semibold leading-6 text-canvas-3'
                    >
                      How can we help you?
                    </label>
                    <p id='message-description' className='text-gray-400'>
                      Max 500 characters
                    </p>
                  </div>
                  <div className='mt-2.5'>
                    <textarea
                      value={formData.message}
                      onChange={handleChange}
                      id='message'
                      name='message'
                      rows={4}
                      aria-describedby='message-description'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-canvas-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkCream sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-10 flex justify-end border-t border-canvas-3/10 pt-8'>
                {state.succeeded && (
                  <p className='text-center'>
                    Thanks for your message, we'll be in touch soon!
                  </p>
                )}
                <button
                  type='submit'
                  disabled={state.submitting}
                  className='rounded-md bg-cream px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-cream hover:text-canvas-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkCream'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
