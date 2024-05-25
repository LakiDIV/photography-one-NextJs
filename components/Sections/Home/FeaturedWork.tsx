import LinkBtn from "@/components/Elements/Buttons/LinkBtn";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import Image from "next/image";
import React from "react";

function FeaturedWorkSection() {
  return (
    <div className="m-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="w-full flex flex-col justify-center items-start">
        <SectionHeader title="Featured Work" />
        <p className="flex-grow text-justify ">
          Every family has a unique journey – from the excitement of
          parenthood's first steps, to the cherished milestones of baby's first
          year, the transformative journey into adulthood, and the joys of
          becoming grandparents. Within each heartbeat, smile, and shared glance
          lies a story waiting to be told. Let's embark on this adventure
          together, capturing these moments and weaving them into the tapestry
          of our shared history.
        </p>
        <LinkBtn href="/stories" text="Visit our Portfolio" />
      </div>

      <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
        <div className="absolute p-4 bg-gray-800 rounded-ee-md text-white font-bold outline outline-1 ">
          <p>Maternity</p>
        </div>
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
    </div>
  );
}

export default FeaturedWorkSection;
