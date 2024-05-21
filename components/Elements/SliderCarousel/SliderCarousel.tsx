"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestamonialContent from "../Testamonials/Swiper/TestamonialContent";
import { Autoplay, Pagination } from "swiper/modules";
import CarouselContent from "./CarouselContent";

function SliderCarousel() {
  const testamonialContainerClass = "bg-white border shadow-sm bg-gray-500 ";

  return (
    <div className="p-4  max-w-6xl mx-auto">
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper h-64 rounded-md overflow-hidden"
      >
        <div className="mx-10 p-10">
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
          <SwiperSlide className={testamonialContainerClass}>
            <CarouselContent />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default SliderCarousel;
