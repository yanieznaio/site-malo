"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ShareButton from '@/app/compenents/button/ShareButton'

const Article = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} class="py-12 md:py-16 lg:py-24 relative">
            <div class="absolute top-0 start-0 w-full bg-dark-brown md:h-[700px] h-[250px]">

            </div>
            <div class=" relative text-gray-700 font-medium leading-relaxed">
                <div class="max-w-6xl mx-auto ">
                    <div class="text-center mb-5">
                        <Link class="inline-flex align-items-center text-white font-bold" href="/actualites">
                            <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.4167 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <span class="ms-2">Retour au blog</span>
                        </Link>
                    </div>
                    <div className='px-4 md:px-0'>
                        <img class="img-fluid block mb-12 w-full rounded-2xl" src="/prestation1.jpg" alt="" />
                    </div>


                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-12 ">
                            <div class="mb-4 inline-flex">
                                <span class="me-3 text-sm text-gray-400">17 Jul 2023</span>
                                <svg width="4" height="4" viewbox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#D1D1D1"></circle></svg>
                                <span class="ms-3 text-sm text-gray-400">lecture 2 min </span>
                            </div>
                            <h2 class=" mb-8 text-4xl font-bold text-gray-900 font-heading xs:text-5xl md:text-6xl">RE2020 : Tout Ce Qu'il Faut Savoir sur la Nouvelle Réglementation Environnementale</h2>
                        </div>
                        <div className='px-6 md:px-0'>
                            <h4 class="mb-6 font-bold text-3xl">Qu'est-ce que la RE2020 ?</h4>
                            <p class="text-md leading-relaxed mb-6">La RE2020, ou Réglementation Environnementale 2020, est la nouvelle norme française qui remplace la RT2012.  </p>
                            <p class="  leading-relaxed mb-6"> Elle vise à améliorer la performance énergétique et environnementale des bâtiments neufs en réduisant leur impact écologique et en favorisant l'utilisation d'énergies renouvelables. Entrée en vigueur le 1er janvier 2022, la RE2020 est un pilier essentiel de la transition énergétique en France.</p>

                            <h4 class="mb-6">impacts de la RE2020 sur les Études Thermiques</h4>
                            <p class="fs-5 font-medium  leading-relaxed mb-6">La mise en place de la RE2020 entraîne des changements majeurs dans la manière dont les études thermiques sont réalisées. Ces études doivent maintenant intégrer de nouveaux paramètres et respecter des critères plus rigoureux.Analyse environnementale du cycle de vie : Les études doivent inclure une analyse complète de l'impact environnemental des matériaux utilisés, de leur fabrication à leur fin de vie.</p>
                            <ul class="ps-0 fs-5 fw-medium text-dark-light lh-lg mb-8">
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>1.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="d-inline fs-5 font-bold text-dark lh-lg">Évaluation des matériaux biosourcés:</span>
                                            <span>Une attention particulière est accordée aux matériaux renouvelables et ayant un faible impact carbone.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>2.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Impact des matériaux non renouvelables :</span>
                                            <span> Les matériaux traditionnels doivent être évalués en fonction de leur empreinte carbone sur l'ensemble de leur cycle de vie.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>3.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Comparaison des solutions:</span>
                                            <span>Les études doivent comparer différentes options pour minimiser l'impact environnemental global..</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <p class="fs-5 font-medium  leading-relaxed mb-6">Calculs énergétiques renforcés : Les exigences en matière de calculs de consommation d'énergie sont accrues.</p>
                            <ul class="ps-0 fs-5 fw-medium text-dark-light lh-lg mb-8">
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="d-inline fs-5 font-bold text-dark lh-lg">Bbio:</span>
                                            <span>Le coefficient de besoin bioclimatique, ou <strong>Bbio</strong>, doit être optimisé pour garantir une faible consommation d'énergie.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Cep :</span>
                                            <span> La consommation d'énergie primaire, ou <strong>Cep</strong>, doit être réduite, nécessitant une meilleure intégration des énergies renouvelables.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Tic:</span>
                                            <span> La température intérieure de confort, ou <strong>Tic</strong>, doit être prise en compte pour éviter les surchauffes estivales.</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <h4 class="mb-6">À Qui S'adresse la RE2020 ?</h4>
                            <p>La RE2020 concerne plusieurs acteurs du secteur de la construction. Les constructeurs de maisons individuelles doivent désormais respecter ces nouvelles normes pour toutes les nouvelles constructions. Les promoteurs immobiliers sont également concernés, notamment pour les immeubles d'habitation collectifs. Les professionnels du bâtiment, tels que les architectes, ingénieurs et maîtres d'œuvre, doivent intégrer ces obligations dans leurs projets. Enfin, les collectivités territoriales doivent s'assurer que les bâtiments publics neufs soient conformes à la RE2020.</p>
                            <h4 class="mb-6 mt-6">Le Processus pour Se Conformer à la RE2020</h4>
                            <p>Pour se conformer à la RE2020, plusieurs étapes sont nécessaires. La première est la réalisation d'une étude thermique préalable, qui évalue les besoins énergétiques du projet et propose des solutions adaptées. Ensuite, il est crucial de bien concevoir le projet en choisissant des matériaux et des équipements conformes aux exigences de la RE2020, notamment pour l'isolation et les systèmes énergétiques.</p>
                            <p className='mt-6'>Une simulation énergétique est ensuite réalisée pour vérifier que le projet respecte les normes de consommation énergétique et de confort thermique. Pendant la construction, un suivi rigoureux du chantier est nécessaire pour s'assurer que les normes sont respectées, avec des ajustements effectués si nécessaire. Des tests de conformité sont réalisés en fin de chantier pour vérifier la performance énergétique et environnementale du bâtiment. Enfin, une certification est obtenue pour attester de la conformité du bâtiment à la RE2020.</p>
                            <h4 class="mt-8 mb-6">Conclusion</h4>
                            <p class="   mb-0">La <strong>RE2020</strong> est une réglementation ambitieuse visant à rendre les bâtiments neufs plus écologiques et économes en énergie. En imposant des standards élevés en matière d'émissions de CO2, d'isolation thermique et d'utilisation des énergies renouvelables, elle joue un rôle crucial dans la transition énergétique de la France. Que vous soyez constructeur, promoteur, ou simplement intéressé par un projet de construction, il est essentiel de comprendre et de respecter ces nouvelles exigences pour garantir des bâtiments durables et conformes aux normes en vigueur..</p>
                            <div class="my-12 border-b"></div>
                            <div class="py-5 px-6 bg-gray-100 border rounded-xl ">
                                <div class="flex flex-wrap " >
                                    <span class="me-2  text-xs md:text-sm text-dark-light">Interessé par cette article? vous souhaitez en savoir plus ?</span>
                                    <Link class=" p-0 text-light-brown hover:text-dark-brown transition-colors ease-linear inline-flex flex-wrap items-center font-bold" href="/contact">
                                        <span class="me-2">Contactez nous</span>
                                        <svg width="20" height="21" viewbox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.99984 10.6667H15.4165M15.4165 10.6667L10.4165 5.66675M15.4165 10.6667L10.4165 15.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div class="my-5 border-b"></div>
                            <div class="flex flex-wrap items-center justify-between">
                                <div class="flex mb-6 items-center">
                                    <img src="/logo.png" alt="" className='w-16 h-16' />
                                    <div class="ms-4">
                                        <span class="block fw-semibold">Coté environnement</span>
                                        <span class="text-gray-400 fw-medium">Expert en étude thermique</span>
                                    </div>
                                </div>
                                <div class="mb-6"><ShareButton /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Article