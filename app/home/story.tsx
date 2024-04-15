"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { homeStoryContents } from "../constants/home";
import Image from "next/image";

const StoryHome = () => {
  return (
    <div className="md:grid md:grid-cols-2 bg-white items-center">
      <div className="w-full px-10 2xl:px-[95px] py-5">
        <div className="text-[22px] 2xl:text-[24px] font-medium text-[#2A2F35]">
          What’s Your Story?
        </div>
        <div className="mt-2 2xl:mt-4 pt-2 border-t border-[#EEEEEE] text-[14px] text-[#828282]">
          Our company was founded over ten years ago on a set of fundamental
          principles that we continue to honor today. These principles include
          providing unmatched service to our clients, putting safety first,
          providing opportunities for our team members, always going above and
          beyond, encouraging innovation, being honest and trustworthy, and
          making a positive impact on our communities.
        </div>
        <div className="mt-3 text-[18px] 2xl:text-[20px] text-[#000B47] font-semibold">
          BinLee
        </div>
        <div className="mt-1 text-[12px] 2xl:text-[14px] text-[#545454]">
          CCO & co-founder of Archibuild
        </div>
        <button className="btn btn-style1 mt-6">core values</button>
      </div>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          loop
          breakpoints={{
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          navigation={{
            nextEl: ".story-button-next",
            prevEl: ".story-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {homeStoryContents?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={value?.img}
                  className="w-full h-[370px] md:h-auto min-h-[370px] object-cover"
                  width={480}
                  height={500}
                  priority
                  alt="story"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30 z-[1]" />
                <div className="absolute w-full bottom-0 left-0 px-5 pb-8 text-center z-[2]">
                  <div className="text-[22px] 2xl:text-[24px] font-semibold">
                    {value?.title}
                  </div>
                  <p className="flex h-[160px] 2xl:h-[140px] py-3 text-[14px] 2xl:text-[16px] items-center italic">
                    {value?.content}
                  </p>
                  <button className="btn btn-style3">view more</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute story-button-prev top-1/2 left-0 -translate-y-1/2 items-center z-[1]">
          <Image
            src={"/images/icons/arrow_left.svg"}
            className="w-[50px] h-[50px] cursor-pointer"
            width={40}
            height={24}
            priority
            alt="prev"
          />
        </div>
        <div className="absolute story-button-next top-1/2 right-0 -translate-y-1/2 items-center z-[1]">
          <Image
            src={"/images/icons/arrow_right.svg"}
            className="w-[50px] h-[50px] cursor-pointer"
            width={40}
            height={40}
            priority
            alt="next"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryHome;
