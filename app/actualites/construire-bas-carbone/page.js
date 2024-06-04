"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
const page = () => {
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
                        <img class="img-fluid block mb-12 w-full rounded-2xl" src="/batiment.jpg" alt="" />
                    </div>


                    <div class="max-w-3xl mx-auto">
                        <div class="text-center mb-12 ">
                            <div class="mb-4 inline-flex">
                                <span class="me-3 text-sm text-gray-400">17 Jul 2023</span>
                                <svg width="4" height="4" viewbox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2" cy="2" r="2" fill="#D1D1D1"></circle></svg>
                                <span class="ms-3 text-sm text-gray-400">lecture 2 min </span>
                            </div>
                            <h2 class=" mb-8 text-4xl font-bold text-gray-900 font-heading xs:text-5xl md:text-6xl">Construire un avenir bas carbone : une approche essentielle</h2>
                        </div>
                        <div className='px-6 md:px-0'>

                            <p class="text-md leading-relaxed mb-6">Le secteur de la construction est responsable de 23 % des émissions de gaz à effet de serre en France. Pour réduire ces émissions, la construction bas carbone s'impose comme une solution incontournable.  </p>
                            <p class="  leading-relaxed mb-6"> Mais que signifie réellement "construction bas carbone" et comment l'implémenter efficacement dans vos projets ? Nous vous expliquons tout.</p>

                            <h4 class="mb-6">Qu'est-ce que la construction bas carbone ?</h4>
                            <p class="fs-5 font-medium  leading-relaxed mb-6">La construction bas carbone vise à limiter les émissions de CO₂ tout au long du cycle de vie d’un bâtiment, de la fabrication des matériaux à la démolition, en passant par la construction et l’exploitation. Cela inclut l’utilisation de matériaux à faible impact environnemental, la conception bioclimatique, l’optimisation énergétique et l’adoption de procédés de construction innovants.</p>
                            <h4 class="mb-6">Pourquoi adopter la construction bas carbone ? ?</h4>


                            <ul class="ps-0 fs-5 fw-medium text-dark-light lh-lg mb-8">
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>1.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="d-inline fs-5 font-bold text-dark lh-lg">Réduire l’empreinte carbone</span>

                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Contribuer à la préservation des ressources naturelles</span>

                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-4">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Améliorer l’efficacité énergétique des bâtiments</span>

                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-4">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Créer des emplois verts et stimuler l’innovation</span>

                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Renforcer l’image de marque des entreprises engagées dans une démarche écologique</span>

                                        </p>
                                    </div>
                                </li>
                            </ul>
                            <h4 class=" mb-6">Comment mettre en œuvre une construction bas carbone ?</h4>
                            <p class="fs-5 font-medium  leading-relaxed mb-6">Pour réduire l’impact environnemental des bâtiments, il est crucial d’adopter des pratiques de construction durable dès la conception du projet. Voici quelques pistes à explorer :</p>
                            <ul class="ps-0 fs-5 fw-medium text-dark-light lh-lg mb-8">
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="d-inline fs-5 font-bold text-dark lh-lg">Choisir des matériaux durables :</span>
                                            <span> privilégiez les matériaux biosourcés (bois, paille, chanvre, etc.) et les matériaux recyclés (béton recyclé, acier recyclé, etc.) pour réduire l’empreinte carbone de vos projets.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Adopter une conception bioclimatique :</span>
                                            <span>  tirez parti des caractéristiques naturelles du site (ensoleillement, ventilation, etc.) pour minimiser les besoins énergétiques du bâtiment.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Optimiser l’isolation : </span>
                                            <span> une bonne isolation permet de réduire les besoins en chauffage et en climatisation, limitant ainsi les émissions de CO₂.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Utiliser des énergies renouvelables :</span>
                                            <span>  intégrez des sources d’énergie renouvelable (panneaux solaires, éoliennes, etc.) dans vos projets pour réduire la dépendance aux énergies fossiles et les émissions de gaz à effet de serre.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Privilégier la sobriété : </span>
                                            <span> concevez des bâtiments compacts et multifonctionnels pour limiter la consommation de matériaux et d’énergie.</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            <h4 class="mb-6">Quels sont les coûts et les financements pour une construction bas carbone ?</h4>
                            <p>Bien que la construction bas carbone puisse représenter un surcoût initial par rapport à une construction traditionnelle, elle permet de réaliser des économies sur le long terme grâce à une meilleure performance énergétique et à des coûts d’exploitation réduits. De plus, des aides financières et des subventions peuvent être obtenues pour soutenir les projets de construction durable.</p>
                            <h4 class="mb-6 mt-6">Quels sont les labels et certifications pour une construction bas carbone ?</h4>
                            <ul class="ps-0 fs-5 fw-medium text-dark-light lh-lg mb-8">
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="d-inline fs-5 font-bold text-dark lh-lg">Le label BBCA (Bâtiment Bas Carbone) :</span>
                                            <span> il valorise les constructions ayant une faible empreinte carbone tout au long de leur cycle de vie.</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">Le label Bâtiment Biosourcé : :</span>
                                            <span>  il certifie l’utilisation de matériaux biosourcés dans la construction..</span>
                                        </p>
                                    </div>
                                </li>
                                <li class="flex mb-6">
                                    <div class="me-2">
                                        <span>.</span>
                                    </div>
                                    <div>
                                        <p class="fs-5 fw-medium text-dark-light lh-lg mb-0">
                                            <span class="inline fs-5 font-bold text-dark lh-lg">La certification E+C- (Énergie Positive & Réduction Carbone) :</span>
                                            <span>  elle évalue la performance énergétique et environnementale des bâtiments.</span>
                                        </p>
                                    </div>
                                </li>

                            </ul>
                            <h4 class="mt-8 mb-6">Conclusion</h4>
                            <p class="   mb-0">La <strong>construction bas carbone</strong> est une réponse efficace aux défis environnementaux actuels. En adoptant des pratiques de construction durable et en utilisant des matériaux à faible impact environnemental, vous pouvez réduire l’empreinte carbone de vos projets et contribuer à la transition énergétique. N’hésitez pas à vous renseigner sur les labels et certifications pour valoriser votre démarche et bénéficier des aides financières disponibles.</p>
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
                                        <span class="block fw-semibold">Coté environment</span>
                                        <span class="text-gray-400 fw-medium">Expert en Etude thermique</span>
                                    </div>
                                </div>
                                <div class="mb-6"><a class=" py-3 px-4 text-dark shadow rounded-full" href="#">Partager cet Article</a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default page 