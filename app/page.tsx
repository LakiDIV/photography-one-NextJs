import LinkToFAQs from "@/components/Elements/Backlinks/LinkToFAQs";
import GoogleMap from "@/components/Elements/GoogleMap/GoogleMap";
import ImageBtn from "@/components/Elements/Backlinks/ImageBtn/ImageBtn";
import TestamonialOne from "@/components/Elements/Testamonials/TestamonialOne";
import NavBar from "@/components/Header/NavBar/NavBar";
import LandingSection from "@/components/Sections/Landing/LandingSection";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SliderCarousel from "@/components/Elements/SliderCarousel/SliderCarousel";
import ParallaxOne from "@/components/Sections/ParallaxOne";
import ParallaxTwo from "@/components/Sections/ParallaxTwo";
import LetsTalkSection from "@/components/Sections/Home/LetsTalk";
import FeaturedWorkSection from "@/components/Sections/Home/FeaturedWork";
import OurServicesSection from "@/components/Sections/Home/OurServices";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <NavBar />

      <div className="relative max-w-7xl mx-auto">
        <SliderCarousel />
      </div>
      <br />
      <br />
      <div className="relative flex flex-col items-center justify-center max-w-6xl mx-auto">
        <hr className="my-4" />
        <FeaturedWorkSection />
      </div>

      <ParallaxOne />

      <div className="max-w-6xl mx-auto  pb-2">
        <OurServicesSection />
        <TestamonialOne />
      </div>

      <ParallaxTwo />

      <div className="relative flex flex-col justify-center max-w-5xl mx-auto border p-6  rounded-md mb-6 ">
        <LetsTalkSection />
      </div>

      <div className="bg-gray-100  mx-auto max-w-6xl p-2">
        <LinkToFAQs />
      </div>
    </div>
  );
}
