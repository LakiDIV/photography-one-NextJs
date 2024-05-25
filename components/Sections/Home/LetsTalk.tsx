import LinkBtn from "@/components/Elements/Buttons/LinkBtn";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import Image from "next/image";
import React from "react";

function LetsTalkSection() {
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="w-full flex flex-col justify-center items-start">
        <SectionHeader title="Let's Talk!" />
        <p className="flex-grow text-justify ">
          We're excited to hear from you! Whether you have questions about our
          photography services, want to discuss your vision, or are ready to
          book a session, we're here to help. Reach out to us today, and let's
          start planning how to capture your special moments in the most
          beautiful way possible. Your story deserves to be told, and we can't
          wait to be a part of it. Let's create something amazing together!
        </p>
        <p></p>
        <LinkBtn href="/contact" text="Contact Us" />
      </div>

      <div className="bg-gray-600 w-full h-64 md:h-full rounded-md overflow-hidden">
        <Image
          alt={"Just Natural by Rod - Our Story Section Thumbnail"}
          src={
            "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod/Portfolio/4B0A7517(2)-2.jpg?updatedAt=1716045008616"
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

export default LetsTalkSection;
