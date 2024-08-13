import Header from '@/components/Layout/Header'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Layout/Footer'
import '@/app/globals.css'
import HeadRoomWrapper from '@/components/HeadRoomWrapper/HeadRoomWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'White Rose Design',
  description:
    'White Rose Design offers elegant and innovative interior design solutions, transforming spaces with timeless style and personalized touches. Elevate your living or work environment with our expert design services tailored to your unique taste.',
}

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <main className='font-normal'>
          <div className='absolute w-full top-0 z-50'>
            <HeadRoomWrapper>
              <Header />
            </HeadRoomWrapper>
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout
