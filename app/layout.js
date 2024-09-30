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
  metadataBase: new URL('https://yourdomain.com'),  // Replace with your domain
  title: 'Coté environement',
  openGraph: {
    images: '/log.svg', // Update this path to your image
  },
  twitter: {
    card: 'summary_large_image',
    images: '/log.svg', // Update this path to your image
  },
};

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
