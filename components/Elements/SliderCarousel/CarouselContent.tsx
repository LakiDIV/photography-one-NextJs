import React from "react";
import { CircleUserRound, Image, Minus, Quote } from "lucide-react";
import { SwiperSlide } from "swiper/react";

function CarouselContent() {
  return (
    <div className=" bg-red-700 ">
      <span className=" absolute right-0 m-4 text-zinc-300 text-3xl ">
        <Image />
      </span>
    </div>
  );
}

export default CarouselContent;
