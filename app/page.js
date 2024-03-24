
import Hero from './compenents/hero/Hero';
import Slider from './compenents/slider/Slider';
import SelfPresentation from './compenents/selfPresentation/SelfPresentation';
import Actualites from './compenents/actualites/Actualites';
import ContentSection from './compenents/ContentSection';

export default function Home() {
  return (
    <main className="relative w-full bg-light-brown ">

      <Hero />

      <ContentSection />
      <Actualites />


      <Slider />



    </main>
  )
}
