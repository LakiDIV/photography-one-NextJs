"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CarouselContent from "./CarouselContent";

function SliderCarousel() {
  const testamonialContainerClass = "bg-white border shadow-sm bg-gray-500 ";
  const images = [
    {
      id: 1,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod//Portfolio/4B0A0297-2.jpg?updatedAt=1715496919406",
      isLandscape: true,
    },
    {
      id: 2,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod//Portfolio/0M4A0003-2.jpg?updatedAt=1715496226019",
      isLandscape: false,
    },
    {
      id: 3,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod//Portfolio/4B0A2338-3.jpg?updatedAt=1715496238668",
      isLandscape: false,
    },
    {
      id: 4,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod//Portfolio/4B0A7756-2.jpg?updatedAt=1715496236036",
      isLandscape: true,
    },

    {
      id: 8,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/tr:w-800/Just%20Natural%20by%20Rod//Portfolio/0M4A2205-2.jpg?updatedAt=1715496234710",
      isLandscape: true,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="p-2 m-2 border rounded-sm ">
        <Swiper
          spaceBetween={8}
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
          className="mySwiper h-96 w-full rounded-sm overflow-hidden"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id} className={testamonialContainerClass}>
              <CarouselContent imageUrl={image.imageUrl} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderCarousel;
