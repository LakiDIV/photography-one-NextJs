import FaqItems from "@/components/Elements/faq-items";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function FAQsPage() {
  return (
    <div>
      <NavBar />
      <div className=" mx-auto max-w-5xl border rounded-sm p-4 mb-4">
        <FaqItems />
      </div>
    </div>
  );
}
