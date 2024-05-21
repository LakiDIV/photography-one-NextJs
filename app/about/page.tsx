import GoogleMap from "@/components/Elements/GoogleMap/GoogleMap";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function AboutPage() {
  return (
    <div className=" mx-auto max-w-5xl">
      <NavBar />
      <GoogleMap />
    </div>
  );
}
