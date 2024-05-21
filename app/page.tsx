import LinkToFAQs from "@/components/Elements/Backlinks/LinkToFAQs";
import GoogleMap from "@/components/Elements/GoogleMap/GoogleMap";
import ImageBtn from "@/components/Elements/Backlinks/ImageBtn/ImageBtn";
import TestamonialOne from "@/components/Elements/Testamonials/TestamonialOne";
import NavBar from "@/components/Header/NavBar/NavBar";
import LandingSection from "@/components/Sections/Landing/LandingSection";
import SectionOne from "@/components/Sections/SectionOne";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SliderCarousel from "@/components/Elements/SliderCarousel/SliderCarousel";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <NavBar />

      <SliderCarousel />
      <div className="relative flex flex-col items-center justify-center h-96 bg-gray-100">
        ___________________
      </div>
      <div className="bg-gray-100 mx-auto max-w-5xl pb-2">
        <SectionOne />

        <ImageBtn />

        <div className=" relative flex flex-col items-center justify-center h-screen bg-gray-100"></div>
        <TestamonialOne />
        <LinkToFAQs />
      </div>
    </div>
  );
}
