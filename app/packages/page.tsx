import InverstmentList from "@/components/Elements/InverstmentList";
import TestOfferBanner from "@/components/Elements/Offers/TestOfferBanner";
import InvestmentNavBar from "@/components/Header/InvestmentNavBar/page";
import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";

export default function PakcagesPage() {
  return (
    <>
      <NavBar />
      <div className=" max-w-5xl mx-auto">
        {/* <InvestmentNavBar /> */}
        <div className=" p-2 border border-slate-200 bg-gray-100 rounded-sm">
          <TestOfferBanner />
          <InverstmentList />
        </div>
      </div>
    </>
  );
}
