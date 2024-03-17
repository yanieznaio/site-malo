import Image from 'next/image'
import Navlink from './compenents/navlink'
import Prestation from './compenents/prestationSection/Prestation';
import Hero from './compenents/hero/Hero';
import Slider from './compenents/slider/Slider';
import Clients from './compenents/client/Clients';
import SelfPresentation from './compenents/selfPresentation/SelfPresentation';
import Footer from './compenents/footer/Footer';
import Scroll from './compenents/Scroll';
import Actualites from './compenents/actualites/Actualites';

export default function Home() {
  return (
    <main className="relative w-full bg-light-brown ">

      <Hero />
      <Slider />
      <SelfPresentation />
      <Actualites />




    </main>
  )
}
