import React from "react";
import CollageOne from "./ImageShowcase/CollageOne";
import Link from "next/link";
import LinkBtn from "../Elements/Buttons/LinkBtn";

import "./parallax.css";

export default function ParallaxTwo() {
  return (
    <div className="p-4 m-4">
      <div>
        <div id="parallax-world-of-ugg">
          <section>
            <div className="parallax-two text-white title ">
              <h2 className="font-boldWrite text-yellow-500 drop-shadow-md">
                "Celebrating Love, Laughter, and Family Bonds in Every Shot!"
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
