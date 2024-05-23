import React from "react";
import CollageOne from "./ImageShowcase/CollageOne";
import Link from "next/link";
import LinkBtn from "../Elements/Buttons/LinkBtn";

import "./parallax.css";

export default function ParallaxOne() {
  return (
    <div className="p-4 m-4">
      <div>
        <div id="parallax-world-of-ugg">
          <section>
            <div className="parallax-one text-white title ">
              <h2 className="font-boldWrite text-yellow-500 drop-shadow-md">
                "Welcoming Little Blessings into the World"
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
