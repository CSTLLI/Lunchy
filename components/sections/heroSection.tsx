"use client"

import Image from "next/image";

import { Typography, Badge, Button } from "@/components/ui";
import HeroSectionImg from "/public/hero_section_1.png";

const heroSection = () => {
    return (
        <section className="md:flex mt-8 gap-16 px-12">
            <div className="flex-col gap-4">
                <Badge className="mt-4">Paiement instantané</Badge>
                <Typography variant="h1">Commandez grâce aux <span className="text-primary-color">cryptos !</span></Typography>
                <p className="mt-4 text-left">Découvrez la nouvelle ère de gestion de cantine avec <span className="font-bold">Lunchy</span> !</p>
                <p className="text-left">Commandez vos plats préférés avec style grâce à nos options de paiement en cryptomonnaie.</p>

                <Button className="mt-8 w-60">Commander</Button>
            </div>
            <Image src={HeroSectionImg} alt="HeroSectionImg" className=" w-3/5 object-cover"/>
        </section>
    )
}

export default heroSection;