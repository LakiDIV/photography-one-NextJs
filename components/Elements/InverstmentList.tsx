import { PACKAGES_DATA } from "@/constants/packages-data";
import Image from "next/image";

import React from "react";

import "./InverstmentList.css";

export const metadata = {
  title: "Packages",
};

interface Package {
  id: string;
  name: string;
  type: string; // Ensure type property is defined
  image: string;
  description: string;
  features: string[];
  oldprice?: number;
  price: number;
}

function InverstmentList() {
  // Group packages by type
  const packageGroups: { [key: string]: Package[] } = {}; // Define type for packageGroups

  PACKAGES_DATA.forEach((pkg) => {
    if (!packageGroups[pkg.type || ""]) {
      packageGroups[pkg.type || ""] = [];
    }
    packageGroups[pkg.type || ""].push(pkg);
  });

  return (
    <div className="mx-auto p-2 -mb-3 -mt-10 packages">
      {Object.keys(packageGroups).map((type) => (
        <div key={type}>
          <h3
            id={`#${type.toLowerCase().replace(" ", "-")}`}
            className="mb-4 border p-4 text-center rounded-md text-2xl mt-10 pkgCategory bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300 text-gray-100 shadow-sm textShadow-md"
          >
            {type} Packages
          </h3>

          {packageGroups[type].map((pkg, index) => (
            <div
              key={pkg.id}
              id={pkg.id}
              className={`flex flex-col lg:flex-row mb-4 rounded-sm transition-all duration-300 border-gray-200 bg-white shadow-sm ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image (on top for smaller displays, on the left or right for larger displays) */}
              <div
                className={`relative h-64 lg:h-96 lg:w-96 mb-4 lg:mb-0  ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={pkg.image} // Replace with your image source
                  alt={`${pkg.name} Image`}
                  fill={true}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg p-1 pkgThumbnail"
                />
              </div>

              {/* Package details */}
              <div
                className={`flex-grow lg:order-2 p-4 ${
                  index % 2 === 1 ? "lg:mr-8" : "lg:ml-8"
                } flex flex-col justify-center`}
              >
                <h4 className="text-3xl font-bold mb-4 text-primary text-brown-500">
                  {pkg.name}
                </h4>
                <p className="mb-4 text-brown-400">{pkg.description}</p>
                <ul className="mb-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <p
                      key={featureIndex}
                      className="text-brown-400 mb-1 font-semibold text-sm bg-gray-400 shadow-sm bg-opacity-10 px-1  rounded-md"
                    >
                      {feature}
                    </p>
                  ))}
                </ul>
                <hr className="my-4" />
                {pkg.oldprice && (
                  <p className="text-brown-400 text-right line-through mb-2 text-xl opacity-30">
                    was ${pkg.oldprice}
                  </p>
                )}
                <p className="text-xl font-bold text-right text-primary text-brown-500">
                  {pkg.oldprice && <span>Now </span>}
                  <span className="bg-primary p-2 rounded-md text-gray-50">
                    ${pkg.price}
                  </span>{" "}
                  <span className="text-sm opacity-70">Including GST</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default InverstmentList;
