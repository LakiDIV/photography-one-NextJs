import React from "react";
import Link from "next/link";

interface TextButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
}

const LinkBtn: React.FC<TextButtonProps> = ({ href, text, icon }) => {
  return (
    <Link href={href} passHref className="my-4">
      <p className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group pl-1">
        {text}
        {icon && <span className="ml-1">{icon}</span>}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
      </p>
    </Link>
  );
};

export default LinkBtn;
