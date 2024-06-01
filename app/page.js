import React from 'react'
import Hero from './compenents/hero/Hero';
import Slider from './compenents/slider/Slider';
import Actualites from './compenents/actualites/Actualites';
import Cards from './compenents/expertises/Cards';
import Cta from './compenents/Cta';

const content = {
  title: "Construction, Renovation, Etes vous au normes ?",
  color: "#61764B",
  whiteText: true,
  arr: [
    {
      type: "text",
      title: " Un expert pour vous aider dans votre transition ecologique ",
      texte: "Comment réaliser votre construction bas carbone ?  Pour construire bas carbone, le projet se doit d’adopter une approche plurielle. En effet, l'éco-conception, l'les matériaux utilisés ou encore l'utilisation des énergies renouvelables sont autant de paramètres à considérer.",

    },
  ]

}
export default function Home() {
  return (
    <main className="relative w-full bg-white">
      <Hero />
      <Cards />
      <Cta />
      <Actualites />
      <Slider />
    </main>
  )
}
