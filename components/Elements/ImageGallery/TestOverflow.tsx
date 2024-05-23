import React from "react";
import ImageBtn from "../Backlinks/ImageBtn/ImageBtn";

function TestOverflow() {
  return (
    <div className="container mx-auto  max-w-6xl ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="hidden md:grid col-span-1 lg:col-span-2 bg-gray-700 h-64"></div>
        <div className="bg-gray-800 h-64">
          <ImageBtn />
        </div>
      </div>
    </div>
  );
}

export default TestOverflow;
