'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import user from '../../../schemaTypes/auth/user'
import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Contact />
    </>
  )
}
