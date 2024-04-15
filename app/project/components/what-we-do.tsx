import { whatWeDo } from "@/app/constants/project";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/project_grow.jpg"}
        className="absolute w-full h-auto min-h-[440px] top-0 left-0 z-0 pointer-events-none"
        width={1920}
        height={466}
        priority
        alt="bg"
      />
      <div className="relative max-w-[1210px] mx-auto px-5 py-20">
        <div className="text-[14px] 2xl:text-[16px] font-semibold">
          HERE YOU CAN SEE AND ESTIMATE
        </div>
        <div className="text-[30px] md:text-[35px] lg:text-[55px] 2xl:text-[76px] font-bold">
          WHAT WE DO
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 2xl:mt-10">
          {whatWeDo?.map((value) => {
            return (
              <div
                key={value?.title}
                className="h-[400px] p-8 bg-white text-center"
              >
                <Image
                  src={value?.icon}
                  className="w-[60px] h-[58px] mx-auto object-contain"
                  width={60}
                  height={58}
                  priority
                  alt={value?.title}
                />
                <div className="py-5 text-[#383C50] font-bold">
                  {value?.title}
                </div>
                <p className="text-[#383C50] opacity-60">{value?.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
