import Header from "@/components/header/header";
import HeroSection from "@/components/sections/heroSection";
import ServiceSection from "@/components/sections/serviceSection";
const LandingPage = () => {
    return (
        <div className="container p-6">
            <Header/>
            <HeroSection/>
            <ServiceSection />
        </div>
    )
}

export default LandingPage