"use client";

import LinkBtn from "@/components/Elements/Buttons/LinkBtn";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import Image from "next/image";
import React from "react";

function OurServicesSection() {
  return (
    <div className=" p-8 text-left w-full">
      <SectionHeader title="Our Services" />

      <div className="flex flex-col">
        <LinkBtn href="/packages#maternity" text="Maternity" />
        <LinkBtn href="/packages#newborn" text="Newborn" />
        <LinkBtn href="/packages#cakesmash" text="Cake Smash" />
        <LinkBtn href="/packages#family" text="Family" />
      </div>

      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
        <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
          <Image
            alt={"Just Natural by Rod - Our Story Section Thumbnail"}
            src={
              "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod/Portfolio/4B0A4261-2.jpg?updatedAt=1716502713397"
            }
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="w-full h-full shadow-md rounded-md"
          />
        </div>
        <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
          <Image
            alt={"Just Natural by Rod - Our Story Section Thumbnail"}
            src={
              "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod/Portfolio/4B0A4261-2.jpg?updatedAt=1716502713397"
            }
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="w-full h-full shadow-md rounded-md"
          />
        </div>
        <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
          <Image
            alt={"Just Natural by Rod - Our Story Section Thumbnail"}
            src={
              "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod/Portfolio/4B0A4261-2.jpg?updatedAt=1716502713397"
            }
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="w-full h-full shadow-md rounded-md"
          />
        </div>
        <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
          <Image
            alt={"Just Natural by Rod - Our Story Section Thumbnail"}
            src={
              "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod/Portfolio/4B0A4261-2.jpg?updatedAt=1716502713397"
            }
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="w-full h-full shadow-md rounded-md"
          />
        </div>
      </div> */}
    </div>
  );
}

export default OurServicesSection;
