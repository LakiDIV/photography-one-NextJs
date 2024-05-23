import React from "react";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import Image from "next/image";

function Portfolio() {
  return (
    <div className=" mx-auto grid">
      <div className="grid grid-flow-row-dense auto-rows-40 sm:grid-cols-2 md:grid-cols-3 gap-4 fade-in z-0 ">
        {PORTFOLIO_DATA.map((item) => (
          <div
            key={item.id}
            className={`relative row-span-1 grid place-items-center border rounded-xl shadow-md bg-gray-100 text-7xl p-1 w-full z-1 hover:relative ${
              item.isLandscape ? " h-52 sm:h-[500px]" : "h-[500px] sm:h-[500px]"
            } ${item.isLandscape ? "sm:col-span-2" : ""}`}
          >
            {/* Display the image */}
            <Image
              src={item.imageUrl}
              alt={`Image ${item.id}`}
              fill={true}
              className=" w-full h-full object-cover shadow-sm rounded-lg border hover:border-brown-100 hover:scale-105 hover:z-50 transition-all"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }} // Set max height and width to 100%
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
