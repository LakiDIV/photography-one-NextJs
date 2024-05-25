import NavBar from "@/components/Header/NavBar/NavBar";
import React from "react";
import { TERMS_AND_CONDITIONS } from "@/constants/terms";
import { ChevronRight } from "lucide-react";

export default function TermsPage() {
  return (
    <div>
      <NavBar />

      <div className="bg-white  mx-auto max-w-5xl p-4">
        <div className="pt-12 pb-12">
          <h1 className="text-3xl font-bold text-gray-500 text-center ">
            TERMS & CONDITIONS
          </h1>
        </div>

        <div className="p-4  mx-auto">
          <p className="mb-4">
            It is agreed that the following terms set out the total agreement
            made between the parties and that no variation or modification of
            this contract shall be effective unless agreed by both parties in
            writing.
          </p>
          {TERMS_AND_CONDITIONS.map((section, index) => (
            <div key={index} className="mb-4">
              <h6 className="text-lg font-bold mb-2 text-gray-800">
                {section.title}
              </h6>
              {Array.isArray(section.content) ? (
                <section className=" pl-6">
                  {section.content.map((item, i) => (
                    <>
                      <p key={i}>
                        <ChevronRight className="inline-block mr-2" />
                        {item}
                      </p>
                    </>
                  ))}
                </section>
              ) : (
                <p>{section.content}</p>
              )}
            </div>
          ))}

          <p className="p-2 bg-gray-200 rounded-sm text-sm font-bold my-8 text-gray-800">
            * By completing the deposit payment the Couple agree to Noah’s Way
            Photography Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
