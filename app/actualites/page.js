
import React from 'react'
import HomeActu from './_components/HomeActu';

export const metadata = {

    title: "Actualités - Bureau d'Étude Thermique",
    description: "Restez informé des dernières actualités et tendances dans le domaine de l'étude thermique et de l'optimisation énergétique.",
    keywords: "actualités, étude thermique, tendances, optimisation énergétique, nouvelles",
    canonical: "https://www.monsite.com/actualite",
    openGraph: {
        title: "Actualités - Bureau d'Étude Thermique",
        description: "Restez informé des dernières actualités et tendances dans le domaine de l'étude thermique et de l'optimisation énergétique.",
        url: "https://www.monsite.com/actualite",
        type: "website"
    }
};

const page = () => {
    return (
        <HomeActu />

    )
}

export default page 