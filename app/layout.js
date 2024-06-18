import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './compenents/navbar/Navbar'
import Footer from './compenents/footer/Footer'
import local from 'next/font/local';
const inter = Inter({ subsets: ['latin'] })



const mori = local({
  src: [
    {
      path: '../public/fonts/PPMori-Regular.otf',

    },
  ],
  variable: '--font-mori',
});
export const metadata = {
  title: 'Cotés envronnement',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${mori.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
