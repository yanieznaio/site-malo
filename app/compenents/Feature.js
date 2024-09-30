"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { BsBuildings } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { motion } from 'framer-motion';
import { services } from '../data';
import MiniCardLogo from './MiniCardLogo';
import { PiCheckSquareOffsetThin } from "react-icons/pi";
import { IoIosCheckmark } from "react-icons/io";
const Feature = () => {
  return (
    <section className="pt-28 bg-white overflow-hidden py-40 xl:px-20">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center">
          <div className="mx-auto">
            <div className="max-w-md mx-auto lg:max-w-2xl lg:mx-0">
              <h1 className="mb-8 text-5xl font-bold text-gray-900 font-heading xs:text-6xl md:text-7xl">
                <span>Collaborer avec notre bureau</span>
                <span className="font-serif italic"> d'études</span>
              </h1>
              <p className="max-w-xl text-2xl font-semibold text-gray-400 md:text-xl 2xl:text-xl">
                Faites-vous accompagner par un expert en études thermiques et enrénovation, construction durable
              </p>
            </div>
            <div className="space-y-8 max-w-sm lg:max-w-md mt-10 mx-auto md:mx-0 z-30 relative">
              <ServiceLink
                title="Études de Bâtiment"
                icon={<BsBuildings size={20} />}
              >
                Coté Environnement accompagne la conception et la réalisation de projets, qu'il s'agisse de <strong>constructions neuves</strong>, d’<strong>extensions</strong>, ou de <strong>rénovations</strong>. Notre expertise couvre la <strong>thermique</strong>, la <strong>qualité de l’air</strong>, et les fluides du bâtiment, avec une maîtrise des dernières normes comme la <strong>RE2020</strong>. <br /><br />
                Besoin de savoir <strong>comment faire une étude thermique</strong> ou <strong>quand réaliser une étude de bâtiment</strong> ? Nos spécialistes vous guident à chaque étape pour garantir l’efficacité de votre projet face aux nouvelles réglementations.
              </ServiceLink>

              <ServiceLink
                title="Optimisation Énergétique"
                icon={<CiCircleCheck size={20} />}
              >
                Coté Environnement aide les promoteurs et collectivités à obtenir des <strong>certifications énergétiques</strong> conformes aux normes, notamment la <strong>RE2020</strong> et le <strong>DPE</strong>. Grâce à notre expertise, nous identifions les enjeux <strong>techniques</strong> et <strong>financiers</strong> pour garantir la réussite de vos projets. <br /><br />
                Vous vous demandez <strong>quelle étude est nécessaire pour un permis de construire</strong> ou <strong>quelles sont les obligations RE2020</strong> ? Nous vous apportons des solutions adaptées.
              </ServiceLink>

              {/* <ServiceLink
                title="Gestion des Documents"
                icon={<FaDesktop size={20} />}
              >
                Equipé de logiciels compatibles BIM et d’outils de mesure avancés, Cot Environnement réalise des études thermiques et des analyses précises de qualité de l’air. Que ce soit pour une extension de maison ou une nouvelle construction, nous optimisons vos projets pour le DPE et la RE2020.
                <br /><br />
                Besoin de savoir qui peut faire une étude thermique ou comment obtenir un DPE pour votre maison ? Nos experts sont à votre service pour des solutions sur mesure.
              </ServiceLink> */}
            </div>
          </div>

          <div className="self-end relative mt-20 md:mt-0">
            <div className="bg-blue-400 w-[300px] md:w-[40vw] h-[500px] md:h-[800px] rounded-full absolute bottom-0 right-0 z-10">
              <MiniCardLogo pos={{ top: "50px", right: "0px" }} />
            </div>
            <Image
              src="/paysage-ville-analogique-lumiere-du-jour-batiments.png"
              alt="Étude Carbone"
              width={600}
              height={500}
              className="z-20 object-cover relative h-[450px] md:h-[500px] rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="mx-auto mt-0 md:mt-40 overflow-hidden bg-neutral-100 rounded-xl  md:pr-4 ">
        <div className="h-full grid grid-cols-1 xl:flex md:flex-row-reverse gap-8 justify-between items-center">
          <div className="xl:w-2/3">
            <section className="relative">
              <div className="relative overflow-hidden  ">
                <h1 className="text-4xl mt-10 lg:text-5xl md:mb-10 tracking-tight font-lato mb-6 ml-2">
                  Services
                </h1>
                <Accordion />
              </div>
            </section>
          </div>

          <div className="relative -mt-0 ml-auto object-cover xl:w-1/2 h-full self-start ">
            <div className='relative xl:w-full w-screen h-[400px] xl:h-[990px]'>
              <Image
                src="/side-view-man-working-eco-friendly-wind-power-project-with-paper-plans.jpg"
                alt="Étude Carbone"
                fill
                className="z-20  object-cover  rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;

const ServiceLink = ({ title, icon, children }) => (
  <div  className="group">
    <div className="overflow-hidden rounded-lg border-emerald-500 p-1 transition-all duration-75 ease-in">
      <div className="p-6 rounded-lg group-hover:bg-white transition-all duration-75 ease-in">
        <div className="flex items-center mb-4">
          <div className="mr-4 bg-gradient-to-r from-emerald-500 to-emerald-900 inline-block text-white rounded-xl p-2">
            {icon}
          </div>
          <h3 className="text-xl text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  </div>
);

const Accordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const variants = {
    collapsed: {
      opacity: 0,
      height: "0",
      y: 30, // Move the text up when collapsed
      transition: {
        opacity: { duration: 0.3 },
        height: { duration: 0.3, ease: 'easeInOut' },
        y: { duration: 0.3, ease: 'easeInOut' }
      },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      y: 0, // Reset Y position when expanded
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3, ease: 'easeInOut' },
        y: { duration: 0.3, ease: 'easeInOut' }
      },
    },
  };

  return (
    <div className="w-full overflow-hidden h-[700px] md:h-[1000px] lg:h-[850px]">
      {services.map((service, i) => (
        <div
          key={i}
          onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
          className="group cursor-pointer w-full  mx-auto md:mb-10 py-6 px-2 md:pb-8 flex flex-col relative border-b border-black"
        >
          <div className="flex  items-center justify-between md:mb-8 lg:mb-0">
            <div>
              <span className="block text-xs font-medium text-gray-500 -mb-2">0{i + 1}</span>
              <h3 className="text-lg md:text-3xl ">{service.title}</h3>
            </div>
            <div className='relative ml-auto'>
            <span className="block text-right h-6 md:h-10 transition-transform ease-in duration-300"
              style={{
                transform: expandedIndex === i ? 'rotate(-90deg)' : 'rotate(0deg)',
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 30L3 3"
                  stroke="#1e293b"
                  strokeWidth="4.3875"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 5.24196V30H5.24196"
                  stroke="#1e293b"
                  strokeWidth="4.3875"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            </div>

          
          </div>

          {/* Animated content with Y-axis motion */}
          <motion.div
            animate={expandedIndex === i ? "expanded" : "collapsed"}
            variants={variants}
            className="overflow-hidden font-mori"
          >
            <motion.div
    
              animate={expandedIndex === i ? {  opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <p className="text-left font-semibold text-slate-800 md:max-w-[90%]">{service.description}</p>
              {service.list && (
                <ul className="mt-4 leading-loose font-mori  font-semibold text-slate-800 grid grid-cols-1 md:grid-cols-2">
                  {service.list.map((ele, i) => (
                    <li key={i} className="text-xs md:text-base flex gap-2"><span className='text-green-600'><IoIosCheckmark /></span>{ele}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};