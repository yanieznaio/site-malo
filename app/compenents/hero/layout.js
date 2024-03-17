import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './compenents/navbar/Navbar'
import Footer from './compenents/footer/Footer'
import local from 'next/font/local';
const inter = Inter({ subsets: ['latin'] })

const ogg = local({
  src: [
    {
      path: '../public/fonts/Ogg-Thin.otf',
      weight: '500'

    },
  ],
  variable: '--font-ogg',
});

const mori = local({
  src: [
    {
      path: '../public/fonts/PPMori-Regular.otf',

    },
  ],
  variable: '--font-mori',
});
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ogg.variable} ${inter.className} ${mori.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
