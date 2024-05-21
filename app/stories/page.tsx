import Portfolio from "@/components/Elements/Portfolio/Portfolio";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function StoriesPage() {
  return (
    <>
      <NavBar />
      <div className="bg-gray-100 mx-auto max-w-5xl p-4 border rounded-md">
        <Portfolio />
      </div>
    </>
  );
}
