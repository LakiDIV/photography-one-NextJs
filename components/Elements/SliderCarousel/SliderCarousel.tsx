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
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/4B0A0297-2.jpg?updatedAt=1715496919406",
      isLandscape: true,
    },
    {
      id: 4,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/4B0A7756-2.jpg?updatedAt=1715496236036",
      isLandscape: true,
    },
    {
      id: 5,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/0M4A0316-2.jpg?updatedAt=1715497037143",
      isLandscape: true,
    },

    {
      id: 8,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/0M4A2205-2.jpg?updatedAt=1715496234710",
      isLandscape: true,
    },
    {
      id: 9,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/4B0A1326-2.jpg?updatedAt=1715496230842",
      isLandscape: true,
    },

    {
      id: 12,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/0M4A6527-2.jpg?updatedAt=1715497036358",
      isLandscape: true,
    },

    {
      id: 13,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/0M4A6892-2.jpg?updatedAt=1715496234565",
      isLandscape: true,
    },

    {
      id: 16,
      imageUrl:
        "https://ik.imagekit.io/cjmwukblm/Just%20Natural%20by%20Rod//Portfolio/4B0A2544-2.jpg?updatedAt=1715496226172",
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 1,
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
