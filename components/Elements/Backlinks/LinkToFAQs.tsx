import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function LinkToFAQs() {
  return (
    <Link href="/faqs">
      <div className="m-4 p-4 bg-gray-700 text-slate-300 cursor-pointer hover:bg-gray-800 transition-all font-bold flex rounded-sm">
        <Link2 className="mr-2" />
        <p>
          Have any questions? Visit our{" "}
          <span className="hover:underline cursor-pointer">FAQs</span>.
        </p>
      </div>
    </Link>
  );
}

export default LinkToFAQs;
