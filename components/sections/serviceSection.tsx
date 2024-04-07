"use client"

import {Typography} from "@/components/ui";

const ServicesDetails = [
    {
        title: "Réservation rapide",
        description: "Votre repas sera commandé en quelques minutes",
        icon: "/hero_utility_1.png",
    },
    {
        title: "Paiement instantané",
        description: "Transaction rapide avec des faibles frais de transaction",
        icon: "/hero_utility_2.png",
    },
    {
        title: "Qualité du produit",
        description: "Sélection quotidienne des produits frais",
        icon: "/hero_utility_3.png",
    }
]
const serviceSection = () => {
    return (
        <section className="flex-col my-4 mt-12 bg-blue gap-2 text-center self-center px-12">
            <Typography variant="h3">A propos de nous</Typography>

            <Typography variant="h2">Elevez votre pause déjeuner avec <span
                className="text-primary-color">Lunchy</span></Typography>
            <div className="md:flex gap-4 p-12 justify-between items-center">
                {ServicesDetails.map((service, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img src={service.icon} alt="service-icon" className="w-40"/>
                        <Typography variant="h4">{service.title}</Typography>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
)
}

export default serviceSection;