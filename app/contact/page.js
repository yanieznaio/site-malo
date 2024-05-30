"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const page = () => {
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const onSubmit = async (e) => {
        // Prevent the form from submitting the traditional way
        e.preventDefault()

        // Don't submit twice
        if (loading) {
            return
        }

        // 👇 A nice little track to get all the form values as an object
        const form = e.target
        const formValues = Object.fromEntries(new FormData(form).entries())

        setLoading(true)
        setSuccessMessage('')

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formValues),
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
            })

            setLoading(false)
            setSuccessMessage('Thank you for contacting us!')

            // Reset the form values after a successful submission
            form.reset()
        } catch (err) {
            console.error(err)
            alert('An error occurred while sending your message...')
            setLoading(false)
        }
    }


    return (



        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: [0.76, 0, 0.24, 1] }} className="min-h-screen bg-cover " style={{ backgroundImage: "url('/house.jpg')" }}>
            <div className="flex flex-col min-h-screen bg-black/60">
                <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div className="text-[#ffff] lg:w-1/2 lg:mx-6">
                            <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Vous souaitez en savoir plus</h1>

                            <p className="max-w-xl mt-6">
                                Nous sommes la pour vous accompagner , Prenez Contact afin que nous puissions évaluer, ensemble, vos besoins.
                            </p>

                            <button className="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                07 83 83 39 47
                            </button>


                        </div>

                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-[#ffff] shadow-2xl rounded-xl  lg:max-w-xl">
                                <h1 className="text-xl font-medium text-gray-700 ">Formulaire de contact</h1>

                                <p className="mt-2 text-gray-500 ">
                                    Nous vous répondrons dans les plus brefs délais
                                </p>

                                <form className="mt-6" onSubmit={onSubmit}>
                                    <div className="flex-1">
                                        <label className="block mb-2 text-sm text-gray-600 ">Nom Prénom</label>
                                        <input type="text" placeholder="Nom" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-[#ffff] border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 ">E-mail</label>
                                        <input type="email" placeholder="email@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-[#ffff] border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" required />
                                    </div>

                                    <div className="w-full mt-6">
                                        <label className="block mb-2 text-sm text-gray-600 ">Votre message</label>
                                        <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-[#ffff] border border-gray-200 rounded-md md:h-48  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" placeholder="Message" required></textarea>
                                    </div>

                                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-[#ffff] capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50" disabled={loading} type='submit'>
                                        Envoyer
                                    </button>
                                    {successMessage && <p>{successMessage}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>




    )
}

export default page