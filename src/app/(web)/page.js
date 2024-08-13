'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import user from '../../../schemaTypes/auth/user'
import Hero from '@/components/Sections/Hero'
import Services from '@/components/Sections/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  )
}
