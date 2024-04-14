"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { clientReview } from "../constants/home";
import Image from "next/image";

const ClientComments = () => {
  return (
    <div className="comment-bg py-40 text-center">
      <div className="max-w-[1170px] mx-auto">
        <div className="text-[60px] font-medium">
          The Future Is For Curious People
        </div>
        <button className="btn btn-style1 mt-4">company history</button>
        <div className="h-[1px] mt-8 bg-[#757575]" />
        <div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="client-preview-swiper"
          >
            {clientReview?.map((review, index) => {
              return (
                <SwiperSlide key={index} className="pt-10 pb-20">
                  <div className="flex gap-2 text-[22px] items-start text-[#BBBBBB]">
                    <Image
                      src={"/images/icons/comment.svg"}
                      className="min-w-[22px]"
                      width={22}
                      height={19}
                      priority
                      alt="comment"
                    />
                    {review?.comment}
                  </div>
                  <div className="flex gap-3 mt-8 items-center justify-center">
                    <Image
                      src={review?.img}
                      className="min-w-[40px] rounded-full"
                      width={40}
                      height={40}
                      priority
                      alt="avatar"
                    />
                    <div>
                      <span>{review?.name}</span>
                      <span>{` / ${review?.position}`}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientComments;
