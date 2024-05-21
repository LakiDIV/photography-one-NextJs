import React from "react";
import CollageOne from "./ImageShowcase/CollageOne";
import Link from "next/link";

export default function SectionOne() {
  return (
    <div>
      <h3 className="mb-8 text-2xl font-semibold uppercase text-gray-700 tracking-widest">
        Frames freeze in time ...
      </h3>
      <CollageOne />
      <Link href="/stories" className="block uppercase hover:underline">
        View All
      </Link>
    </div>
  );
}
