import React from "react";
import { CircleUserRound, Minus, Quote } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import FiveStars from "../FiveStars";

function TestamonialContent() {
  return (
    <div className="">
      <span className=" absolute right-0 m-4 text-zinc-300 text-3xl ">
        <Quote />
      </span>
      <div className="text-center mt-4">
        <div className="h-6 w-6"></div>
        <CircleUserRound className="h-8 w-8 text-zinc-500 mx-auto mb-2" />
        <FiveStars />
        <div className="text-zinc-500 mt-4 text-justify text-xs m-4 font-bold">
          " They were really friendly and did the best job for my baby girls.
          Strongly recommend them as they have the best price and the best
          quality. "
          {/* <span className="inline-flex align-middle">
          <Quote className="ml-1 inline-block" />
        </span> */}
          <div className=" float-end mt-2">
            <span className="inline-flex align-middle">
              <Minus className="ml-1 inline-block" />
            </span>
            Nonoy Jingilma
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestamonialContent;
