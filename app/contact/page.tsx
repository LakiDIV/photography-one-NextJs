import LinkBtn from "@/components/Elements/Buttons/LinkBtn";
import DirectContact from "@/components/Elements/DirectContact";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import NavBar from "@/components/Header/NavBar/NavBar";
import ContactFormWeb3 from "@/components/Sections/ContactFormWeb3";
import { ChevronRight, Sparkle } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <div className=" mx-auto max-w-5xl p-4 border rounded-sm">
        {" "}
        <ContactFormWeb3 />
        <hr className="my-2" />
        <div className="p-4">
          <p className="text-sm text-gray-600 mt-2">
            <Sparkle className="inline-block mr-1" size={16} /> We take at least
            5 business days to get back to Non - Urgent emails.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <Sparkle className="inline-block mr-1" size={16} /> Please read our{" "}
            <LinkBtn href="/terms" text="terms & conditions" /> before sending
            an email and the initial booking email to know about the wedding
            package related querie.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl p-8 my-4 border rounded-sm">
        <h5>Other ways to contact us: </h5>
        <DirectContact />
      </div>
    </>
  );
}
