
import Hero from './compenents/hero/Hero';
import Slider from './compenents/slider/Slider';
import SelfPresentation from './compenents/selfPresentation/SelfPresentation';
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
