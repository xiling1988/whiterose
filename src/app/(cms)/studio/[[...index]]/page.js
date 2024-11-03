'use client'
import { NextStudio } from 'next-sanity/studio'
import sanityConfig from 'sanity.config'
// import config from '../../../../../sanity.config'

export default function Studio() {
  return <NextStudio config={sanityConfig} />
}
