
import React from 'react'
import HomeExpertises from './_compenents/HomeExpertises';
import Head from 'next/head';

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
        <>
            <Head>

            <link 
          rel="preload" 
          href="/homeia.webp" 
          as="image" 
          type="image/webp" 
          importance="high"
        />
            </Head>
          <HomeExpertises />
        </>
      

    )
}

export default page