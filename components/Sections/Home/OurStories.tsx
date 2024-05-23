import LinkBtn from "@/components/Elements/Buttons/LinkBtn";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import Image from "next/image";
import React from "react";

function OurStoriesSection() {
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
        <LinkBtn
          href="/stories"
          text="Visit our Portfolio"
          icon={
            <svg
              className="icon icon-tabler icon-tabler-arrow-up-right"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          }
        />
      </div>

      <div className="bg-gray-600 w-full h-64 md:h-full rounded-md">
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

export default OurStoriesSection;
