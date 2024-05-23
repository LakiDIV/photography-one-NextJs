import GoogleMap from "@/components/Elements/GoogleMap/GoogleMap";
import SectionHeader from "@/components/Elements/Headings/SectionHeader";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function AboutPage() {
  return (
    <div>
      <NavBar />
      <div className=" mx-auto max-w-5xl">
        <div className=" mt-20 mb-20 text-center m-6">
          <SectionHeader title="Glad You're Here!" />
          <p className=" text-justify ">
            Welcome to Just Natural by Rod, where we specialize in capturing
            life's most precious moments with a touch of simplicity and grace.
            Nestled in the heart of Adelaide, our photography page is more than
            just a collection of images; it's a celebration of natural beauty
            and cherished memories. <br />
            <br /> Led by Rod, a passionate photographer hailing from the
            vibrant lands of Sri Lanka, our page is dedicated to preserving the
            essence of newborn innocence, the glow of maternity, the joy of cake
            smashes, and the warmth of family bonds. <br />
            <br /> Through Rod's lens, we weave stories of love, laughter, and
            the purest emotions, freezing moments in time to be treasured for
            generations to come. At Just Natural, we believe that beauty lies in
            simplicity, and our aim is to capture the authentic essence of each
            moment, keeping it raw, genuine, and unforgettable. <br />
            <br /> Step into our world, where every click tells a story, and
            every frame is a testament to the natural elegance of life. Just
            Natural by Rod - where simplicity meets timeless beauty.
          </p>
        </div>

        <GoogleMap />
      </div>
    </div>
  );
}
