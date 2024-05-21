import Link from "next/link";
import React from "react";

export default function InvestmentNavBar() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* <h3 className="text-2xl mb-4">Investment Options</h3> */}
      <ul className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4 text-center text-sm font-nunito tracking-wider">
        <Link
          className="border cursor-pointer transition-all hover:bg-slate-200 border-slate-500 text-gray-700 p-4 italic rounded-sm"
          href={"#maternity"}
        >
          Maternity
        </Link>
        <Link
          className="border cursor-pointer transition-all hover:bg-slate-200 border-slate-500 text-gray-700 p-4 italic rounded-sm"
          href={"#new-born"}
        >
          New Born
        </Link>
        <Link
          className="border cursor-pointer transition-all hover:bg-slate-200 border-slate-500 text-gray-700 p-4 italic rounded-sm"
          href={"#cake-smash"}
        >
          Cake Smash
        </Link>
        <Link
          className="border cursor-pointer transition-all hover:bg-slate-200 border-slate-500 text-gray-700 p-4 italic rounded-sm"
          href={"#family"}
        >
          Family
        </Link>
      </ul>
    </div>
  );
}
