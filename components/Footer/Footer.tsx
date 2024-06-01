import React from "react";
import SocialBacklinks from "../Social/SocialBacklinks";
import SocialMediaIcons from "../Social/SocialMediaIcons/SocialMediaIcons";

export default function Footer() {
  return (
    <>
      <div>
        <SocialMediaIcons />
      </div>

      <div className="relative flex-col items-center justify-center bg-gray-200 bottom-0 w-full h-auto p-4 text-gray-400 text-xs text-center">
        <p className="mb-2">&copy; Just Natural by Rod 2024 </p>
        <p>Site designed by Ziteox</p>
      </div>
    </>
  );
}
