"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "./TestamonialOne.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import TestamonialContent from "./Child/TestamonialContent";
import SectionHeader from "../Headings/SectionHeader";
import TestimonialContent from "./Child/TestamonialContent";

import { testimonials } from "../../../constants/testimonials-data";

const TestimonialOne: React.FC = () => {
  const testamonialContainerClass = "bg-white shadow-sm ";

  return (
    <div className="p-2 m-6">
      <SectionHeader title="What Our Clients Say" />
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
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={testamonialContainerClass}>
              <TestimonialContent
                quote={testimonial.quote}
                author={testimonial.author}
                rating={testimonial.rating}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TestimonialOne;
