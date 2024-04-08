"use client"

import { useState } from "react";
import { Loader } from "lucide-react";
import LandingPage from "@/app/landing-page/landing";

import Header from "@/components/header/header";
import HeroSection from "@/components/sections/heroSection";
import ServiceSection from "@/components/sections/serviceSection";
import Footer from "@/components/footer/footer"; s

export default function Home() {
	const [isLoading, setLoading] = useState(false)
	return (
		<>
			<Header />
			<HeroSection />
			<ServiceSection />
			<Footer />
		</>
	);
}
