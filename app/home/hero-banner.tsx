"use client";
import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { heroBannerContent } from "../constants/home";
import Image from "next/image";
import { useEffect, useRef } from "react";
import clsx from "clsx";

const HeroBanner = () => {
  const delayTime = 12000;
  let intervalId: any;
  const progressRef = useRef<any>();
  const mySwiperRef = useRef<any>();

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const slideChange = () => {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      function sanitisePercentage(i: any) {
        return Math.min(100, Math.max(0, i));
      }
      if (
        mySwiperRef?.current?.swiper?.autoplay?.running &&
        !mySwiperRef?.current?.swiper?.autoplay?.paused
      ) {
        const percentTime = sanitisePercentage(
          100 -
            (mySwiperRef?.current?.swiper?.autoplay?.timeLeft / delayTime) * 100
        );
        progressRef.current.style.width =
          percentTime >= 100 ? 100 : percentTime + "%";

        if (percentTime >= 100) {
          clearInterval(intervalId);
        }
      }
    }, 30);
  };

  return (
    <>
      <div className="relative">
        <Swiper
          ref={mySwiperRef}
          grabCursor={true}
          effect={"creative"}
          loop
          autoplay={{
            delay: delayTime,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Autoplay, EffectCreative]}
          onSlideChange={() => slideChange()}
        >
          {heroBannerContent?.map((value, index) => {
            return (
              <SwiperSlide key={index} className="relative !h-[100vh]">
                <Image
                  src={value.img}
                  className="w-full h-full object-cover"
                  width={1920}
                  height={1080}
                  priority
                  alt="hero banner"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-[#0A0A0A] opacity-50 z-[1]" />
                <div className="absolute w-[1045px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                  <div className="flex">
                    <div className="w-full flex items-end">
                      <div className="pb-5">
                        <p className="text-[18px] text-white">
                          HIGH QUALITY GARANTIED
                        </p>
                        <p className="text-[70px] font-bold text-white">
                          We Are Archibuild
                        </p>
                        <p className="py-5 text-[40px] text-white">
                          {value?.content}
                        </p>
                      </div>
                    </div>
                    <div className="w-[290px] min-w-[290px] h-[440px] border-[30px] border-[#FCC457] border-opacity-70" />
                  </div>
                  <div className="flex mt-5 gap-5 items-center">
                    {value?.typeList?.map((type, index) => {
                      return (
                        <div
                          key={index}
                          className={clsx("text-white text-[18px] uppercase")}
                        >
                          {type}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div ref={progressRef} className="swiper-hero-progress" />
      </div>
      <div className="h-[50px]"></div>
    </>
  );
};

export default HeroBanner;
