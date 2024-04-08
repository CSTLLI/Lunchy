"use client"

import Header from "@/components/header/header";
import HeroSection from "@/components/sections/heroSection";
import ServiceSection from "@/components/sections/serviceSection";
import Footer from "@/components/footer/footer";
const LandingPage = () => {
    return (
        <div className="container p-6">
            <Header/>
            <HeroSection/>
            <ServiceSection />
            <Footer />
        </div>
    )
}

export default LandingPage