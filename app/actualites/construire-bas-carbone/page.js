
import React from 'react'
import Article from './Article';


export const metadata = {
    title: `Construire un avenir bas carbone  - Bureau d'Étude Thermique`,
    description: " elle permet de réaliser des économies sur le long terme grâce à une meilleure performance énergétique et à des coûts d’exploitation réduits",
    keywords: "actualité, bas carbone, étude thermique, optimisation énergétique",
    canonical: `https://www.monsite.com/actualite/`,
    openGraph: {
        title: "Construire un avenir bas carbone",
        description: " elle permet de réaliser des économies sur le long terme grâce à une meilleure performance énergétique et à des coûts d’exploitation réduits",
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