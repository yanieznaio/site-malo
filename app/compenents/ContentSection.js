import Image from 'next/image'
import React from 'react'



import { BsHouse, BsBuildings } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const ContentSection = () => {
    return (

        <div className="relative px-6 py-24 overflow-hidden bg-greybeige isolate sm:py-32 lg:overflow-visible lg:px-0">

            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-argile">Présentation</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-dark-brown sm:text-4xl">  réaliser un  bilan carbone : première étape pour construire sa transition climatique</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Dans le cadre de l'effort général de lutte contre le changement climatique, la gestion et la réduction des émissions de gaz à effet de serre deviennent des priorités incontournables.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/batiment.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                La première étape incontournable pour toute entité est de mesurer son empreinte carbone.
                                En France, cette démarche est rendue obligatoire pour les entreprises dépassant les 500 employés, les organismes publics comptant plus de 250 membres du personnel, ainsi que pour les municipalités de plus de 50 000 habitants, qui doivent également présenter un plan de transition en accompagnement de leur bilan.

                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">

                                    <BsHouse className="flex-none w-5 h-5 mt-1 text-argile" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Maisons individuelles</strong> Depuis le 1er janvier 2023, les assujettis doivent désormais intégrer dans leur bilan les émissions indirectes significatives scope 3 - hormis pour les entreprises qui ne sont pas assujetties à la DPEF.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <HiOutlineOfficeBuilding className="flex-none w-5 h-5 mt-1 text-argile" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Bureaux</strong> Anim aute id magna aliqua
                                        ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <BsBuildings className="flex-none w-5 h-5 mt-1 text-argile" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Batiments collectif</strong> Ac tincidunt sapien
                                        vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8">
                                Et vitae blandit facil  isi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">calculer ses émissions carbone : les solutions de bureau Coté Environnement</h2>
                            <p className="mt-6">

                                Le bilan carbone ne marque que le début de notre accompagnement ! Nous sommes prêts à vous aider à définir une stratégie de réduction des émissions et à élaborer une feuille de route climatique, concrétisée par une série d'actions détaillées.

                                Étant donné que l'énergie est étroitement liée au climat, nous pouvons également vous soutenir dans la réduction de vos consommations énergétiques et dans le respect de vos obligations réglementaires, notamment par la réalisation d'audits énergétiques.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContentSection