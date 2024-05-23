import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

export default function SocialBacklinks() {
  return (
    <div className="flex flex-row items-center justify-center m-4 gap-6 text-neutral-400 border border-neutral-300 rounded-lg p-2 max-w-4xl mx-auto">
      <h2>Connect with us: </h2>
      <Facebook
        size={20}
        className="hover:text-neutral-600 transition-all cursor-pointer"
      />
      <Instagram
        size={20}
        className="hover:text-neutral-600 transition-all cursor-pointer"
      />
      <Youtube
        size={26}
        className="hover:text-neutral-600 transition-all cursor-pointer"
      />
    </div>
  );
}
