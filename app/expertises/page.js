
import React from 'react'
import HomeExpertises from './_compenents/HomeExpertises';


export const metadata = {

    title: "Nos Expertises - Bureau d'Étude Thermique",
    description: "Explorez nos expertises en étude thermique, analyse énergétique, audit énergétique et optimisation de la performance énergétique des bâtiments.",
    keywords: "expertises, étude thermique, analyse énergétique, audit énergétique, optimisation énergétique",
    canonical: "https://www.monsite.com/expertises",
    openGraph: {
        title: "Nos Expertises - Bureau d'Étude Thermique",
        description: "Explorez nos expertises en étude thermique, analyse énergétique, audit énergétique et optimisation de la performance énergétique des bâtiments.",
        url: "https://www.monsite.com/expertises",
        type: "website"
    }
    
};

const page = () => {

    return (
        <HomeExpertises />

    )
}

export default page