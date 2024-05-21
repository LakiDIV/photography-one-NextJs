import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ImageBtn() {
  return (
    <div className=" relative mt-8 text-center max-w-96 mx-auto bg-gray-800 rounded-md  hover:grayscale transition-all">
      {" "}
      <Link href={"/stories"} className="flex justify-center items-center">
        <div className="relative overflow-hidden  transition-all transform-gpu  hover:brightness-75 hover:grayscale bg-brown-1000 rounded-md ">
          <div className="relativ h-64 lg:h-96 w-screen">
            <Image
              src="https://images.unsplash.com/photo-1715593694322-3443b8863126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
              alt="Noah's Way Portfolio Thumbnail"
              fill={true}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
              className="w-full h-full shadow-md  opacity-50"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform transform-gpu hover:-translate-y-2">
            <h5 className="text-white text-sm font-bold">
              Photography Portfolio
            </h5>
            <SquareArrowOutUpRight className="text-white text-2xl mt-2" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImageBtn;
