import React from "react";

function TextCardInsideImage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute w-full h-full">
        <img
          id="imageBg"
          className="w-full h-full object-cover opacity-30 filter blur-sm grayscale"
          src="https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod/Portfolio/DSC03742-2.jpg?updatedAt=1715496231912"
        />
      </div>
      <div className="relative max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 z-10">
        <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <a href="/stories">
            <img
              id="imageTop"
              className="w-full"
              src="https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod/Portfolio/DSC03742-2.jpg?updatedAt=1715496231912"
            />
          </a>
          <div className="relative -mt-16 px-10 pt-5 pb-8 bg-white m-10 bg-opacity-90 backdrop-filter backdrop-blur-sm">
            <a
              href="/stories"
              className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
            >
              FRAMES FREEZE IN TIME ...
            </a>
            <p className="text-gray-500 text-sm">
              We captured lot of love and memories...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextCardInsideImage;
