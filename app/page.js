import React from 'react'
import Hero from './compenents/hero/Hero';
import Slider from './compenents/slider/Slider';
import Cta from './compenents/Cta';
import HomeContact from './contact/_compenents/HomeContact';
import Feature from './compenents/Feature';
import Client from './compenents/Client';

export const metadata = {

  title: "Bureau d'Étude Thermique - Accueil",
  description: "Découvrez notre bureau d'étude thermique et nos services spécialisés en analyse et optimisation énergétique pour bâtiments.",
  keywords: "bureau d'étude thermique, analyse énergétique, optimisation énergétique, performance énergétique, bâtiments",
  canonical: "https://www.monsite.com/",
  openGraph: {
    title: "Bureau d'Étude Thermique - Accueil",
    description: "Découvrez notre bureau d'étude thermique et nos services spécialisés en analyse et optimisation énergétique pour bâtiments.",
    url: "https://www.monsite.com/",
    type: "website"
  }
};


export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <Hero />
      <Feature/>
      <Client/>
      <Cta/>
      <Slider />
      <HomeContact/>
    </main>
  )
}
