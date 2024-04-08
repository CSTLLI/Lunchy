"use client"

import {useState} from "react";
import {Loader} from "lucide-react";
import LandingPage from "@/app/landing-page/landing";

export default function Home() {
  const [isLoading, setLoading] = useState(false)
  return (
    <>
      <LandingPage/>
    </>
  );
}
