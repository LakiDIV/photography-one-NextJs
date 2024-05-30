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
      <h1 className="text-xl font-bold mb-4">Connect with Us</h1>
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
    </div>
  );
}
