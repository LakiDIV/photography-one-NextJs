"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./navbar.css";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector("[data-header]");

      if (pathname === "/") {
        const screenHeight = window.innerHeight;
        if (scrollPosition > screenHeight) {
          setIsNavFixed(true);
          // header?.classList.add("active");
        } else {
          setIsNavFixed(false);
          // header?.classList.remove("active");
        }
      } else {
        if (
          scrollPosition >
          7 * parseFloat(getComputedStyle(document.documentElement).fontSize)
        ) {
          setIsNavFixed(true);
          header?.classList.add("animate");
        } else {
          setIsNavFixed(false);
          header?.classList.remove("animate");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.body.style.paddingTop = isNavFixed ? "7rem" : "0";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.paddingTop = "0";
    };
  }, []);

  return (
    <>
      {isNavFixed && <div className="bg-white w-full h-28 flex" />}
      <nav
        id="home"
        className={`NavBar bg-white w-full h-28 flex items-center justify-center px-4 text-gray-500 uppercase text-sm font-nunito tracking-wider  backdrop-filter ${
          isNavFixed
            ? " transition-all fixed top-0 z-50 shadow-sm bg-opacity-95 backdrop-blur-sm active"
            : ""
        }`}
        role="navigation"
        data-header
      >
        {" "}
        {/* Left-side links */}
        <div className="hidden md:flex items-center ml-auto p-4">
          <Link href="/#home">
            <p className="mx-4">
              <Home />
            </p>
          </Link>
          <Link href="/stories">
            <p className="mx-4">Stories</p>
          </Link>
          <Link href="/packages">
            <p className="mx-4">Investments</p>
          </Link>
        </div>
        {/* Logo */}
        <div>
          <Link href="/">
            <div className="flex items-center mx-4">
              <Image
                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/logo.png"
                alt="Next.js Logo"
                width={120}
                height={30}
                priority
              />
            </div>
          </Link>
        </div>
        {/* Right-side links */}
        <div className="hidden md:flex items-center mr-auto p-4">
          <Link href="/about">
            <p className="mx-4">About Us</p>
          </Link>
          <Link href="/faqs">
            <p className="mx-4">FAQs</p>
          </Link>
          <Link href="/contact">
            <p className="mx-2 border p-2 border-zinc-400 hover:bg-orange-100 transition-all rounded-sm ">
              Say Hello
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
