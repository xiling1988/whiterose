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
  title: 'FullStack Next Sanity App',
  description: 'Boilerplate App with Next, Sanity, Tailwind including Auth',
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
