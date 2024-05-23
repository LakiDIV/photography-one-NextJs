import { BadgeDollarSign } from "lucide-react";
import React from "react";

function TestOfferBanner() {
  return (
    <div className="relative m-2 mb-6 p-4 border border-slate-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm font-bold text-center">
      <p className=" italic text-sm text-gray-200 mt-2">Just a test offer !</p>
      <hr className="m-4" />
      <p className=" italic text-sm text-gray-200">
        Pricing offer banner goes here...
      </p>
      <p className=" italic text-sm text-gray-200">0% Discount</p>
    </div>
  );
}

export default TestOfferBanner;
