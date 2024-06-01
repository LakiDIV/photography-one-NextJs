import React from "react";
import "./SocialMediaIcons.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
export default function SocialMediaIcons() {
  return (
    <div className="socialMediaContainer mx-auto flex flex-col items-center p-8">
      <h1 className="text-lg font-bold mb-8 opacity-50 font-boldWrite">
        Catch Us Online:
      </h1>
      <hr className="w-full border-gray-300 opacity-50 max-w-md mb-2" />
      <ul className="socialIconWrapper flex list-none p-0">
        <li className="icon facebook">
          <span className="tooltip">Facebook</span>
          <a
            href="https://www.facebook.com/Just-Natural-By-Rod-103695188395698"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="icon instagram">
          <span className="tooltip">Instagram</span>
          <a
            href="https://www.instagram.com/just_natural_by_rod/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="icon whatsapp">
          <span className="tooltip">WhatsApp</span>
          <a href="https://wa.me/61447117260" target="_blank">
            <FaWhatsapp />{" "}
          </a>
        </li>
        <li className="icon youtube">
          <span className="tooltip">Youtube</span>
          <a
            href="https://www.youtube.com/@justnaturalbyrod3496"
            target="_blank"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <p className="md:hidden text-xs mt-2 uppercase text-gray-400 opacity-70">Double tap to select</p>
    </div>
  );
}
