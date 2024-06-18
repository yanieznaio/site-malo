
import React from 'react'
import Article from './Article'



export const metadata = {
    title: `RE2020 : Tout Ce Qu'il Faut Savoir - Bureau d'Étude Thermique`,
    description: "Elle vise à améliorer la performance énergétique et environnementale des bâtiments neufs en réduisant leur impact écologique et en favorisant l'utilisation d'énergies renouvelables",
    keywords: "actualité, , étude thermique, re2020,  optimisation énergétique",
    canonical: `https://www.monsite.com/actualite/`,
    openGraph: {
        title: "RE2020 : Tout Ce Qu'il Faut Savoir",
        description: "Elle vise à améliorer la performance énergétique et environnementale des bâtiments neufs en réduisant leur impact écologique et en favorisant l'utilisation d'énergies renouvelables",
        url: `https://www.monsite.com/actualite/`,
        type: "article"
    }
};

const page = () => {
    return (
        <Article />
    )
}

export default page 