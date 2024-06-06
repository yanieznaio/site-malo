'use client'
import React, { useState } from 'react'

const ShareButton = () => {
    const [copied, setCopied] = useState(false);

    const handleShare = async (event) => {
        event.preventDefault();
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Réinitialiser le message après 2 secondes
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };
    return (
        <button onClick={handleShare} className="px-4 py-3 rounded-full shadow text-dark">
            {copied ? "Lien de l'article copié !" : 'Partager cet Article'}
        </button>
    )
}

export default ShareButton