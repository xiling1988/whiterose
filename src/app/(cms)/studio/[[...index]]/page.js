'use client'
import { NextStudio } from 'next-sanity/studio'
import sanityConfig from 'sanity.config'
// import config from '../../../../../sanity.config'

export default function Studio() {
  console.log(sanityConfig)

  return <NextStudio config={sanityConfig} />
}
