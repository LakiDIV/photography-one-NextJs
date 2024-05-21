import ScrollAnimation from "@/components/Elements/Animation/scrollAnimation";
import React from "react";

export default function LandingSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center text-gray-200"
      style={{
        backgroundImage:
          'url("https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod/4B0A7467-2.jpg?updatedAt=1715169573855")',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-40"></div>{" "}
      {/* Overlay */}
      <div className="title relative z-10">
        <h3 className="mb-4 handwriting">A warm welcome to</h3>
        <h2 className="font-bold logo-heading text-4xl">Just Natural by Rod</h2>
        <h5 className="sm:inline-block mt-4 sm:mr-2 mb-2 text-gray-200">
          Adelaide,{" "}
        </h5>
        <h5 className="sm:inline-block text-gray-300 text-xs sm:text-sm">
          South Australia
        </h5>
      </div>
      <div className="mt-8 text-center"></div>
      <ScrollAnimation />
    </section>
  );
}
