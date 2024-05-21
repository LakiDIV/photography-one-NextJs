import FaqItems from "@/components/Elements/faq-items";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function FAQsPage() {
  return (
    <div>
      <NavBar />
      <div className=" mx-auto max-w-5xl bg-gray-100 p-4">
        <FaqItems />
      </div>
    </div>
  );
}
