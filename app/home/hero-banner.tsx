"use client";
import "swiper/css";
import "swiper/css/effect-creative";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import { bannerNavigation, heroBannerContent } from "../constants/home";
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
                <div className="absolute w-full max-w-[1085px] px-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
                  <div className="flex">
                    <div className="w-full flex items-end">
                      <div className="pb-5">
                        <p className="text-[14px] lg:text-[16px] 2xl:text-[18px] text-white">
                          HIGH QUALITY GARANTIED
                        </p>
                        <p className="text-[40px] lg:text-[60px] 2xl:text-[70px] font-bold text-white">
                          We Are Archibuild
                        </p>
                        <p className="py-2 lg:py-3 2xl:py-5 text-[20px] lg:text-[30px] 2xl:text-[40px] text-white">
                          {value?.content}
                        </p>
                      </div>
                    </div>
                    <div
                      className={clsx(
                        "hidden sm:block border-[30px] border-[#FCC457] border-opacity-70",
                        "w-[180px] min-w-[180px] h-[280px] lg:w-[220px] lg:min-w-[220px] lg:h-[330px] 2xl:w-[290px] 2xl:min-w-[290px] 2xl:h-[440px]"
                      )}
                    />
                  </div>
                  <div className="flex mt-3 2xl:mt-5 gap-5 items-center">
                    {value?.typeList?.map((type, index) => {
                      return (
                        <div
                          key={index}
                          className={clsx(
                            type === value.type ? "" : "opacity-50",
                            "text-white text-[14px] lg:text-[16px] 2xl:text-[18px] uppercase cursor-pointer hover:opacity-100"
                          )}
                          onClick={() =>
                            mySwiperRef?.current?.swiper?.slideTo(index)
                          }
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {bannerNavigation?.map((value, index) => {
          return (
            <div key={index} className="relative group h-[300px] sm:h-auto">
              <Image
                src={value?.img}
                className="relative w-full h-auto object-cover z-0"
                width={480}
                height={500}
                priority
                alt="img"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-black opacity-35 group-hover:opacity-50 z-[1] duration-300" />
              <div className="absolute w-full bottom-0 left-0 p-5 2xl:p-10 z-[2]">
                <Image
                  src={value?.icon}
                  className="w-[22px] h-[24px] 2xl:w-[26px] 2xl:h-[29px]"
                  width={26}
                  height={29}
                  priority
                  alt="icon"
                />
                <div
                  className="mt-3 text-[18px] leading-[19px] 2xl:text-[20px] 2xl:leading-[22px] font-medium"
                  dangerouslySetInnerHTML={{ __html: value?.title }}
                />
                <div className="flex w-fit mt-3 2xl:mt-5 gap-2 items-center cursor-pointer hover:gap-3 duration-150">
                  <span className="text-[12px] text-[#FBBE3F] uppercase">
                    read more
                  </span>
                  <Image
                    src={"/images/icons/arrow_readmore.svg"}
                    width={10}
                    height={12}
                    priority
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeroBanner;
