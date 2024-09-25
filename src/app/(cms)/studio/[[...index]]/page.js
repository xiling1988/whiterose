'use client'
import { useState, useEffect } from 'react'
import { NextStudio } from 'next-sanity/studio'
import { getSanityConfig, initializeSanityClient } from '@/libs/sanity'
// import config from '../../../../../sanity.config'

export default function Studio() {
  const [config, setConfig] = useState(null)

  useEffect(() => {
    async function fetchConfig() {
      try {
        const config = await getSanityConfig() // Get the config directly
        console.log('Sanity Config:', config) // Log the config to verify
        setConfig(config)
      } catch (error) {
        console.error('Error fetching Sanity config:', error)
      }
    }
    fetchConfig()
  }, [])

  if (!config) {
    return <div>Loading...</div>
  }
  return <NextStudio config={config} />
}
