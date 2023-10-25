import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/header'
import Trending from '@/components/trending/trending'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='block md:flex gap-5 pt-[100px] lg:pt-[120px] px-[20px] sm:px-[20px] xl:px-[200px]'>
          {children}
          <Trending />
        </div>
      </body>
    </html>
  )
}