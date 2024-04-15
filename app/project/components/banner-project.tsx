"use client";
import AOS from "aos";
import clsx from "clsx";
import { useEffect } from "react";

interface Props {
  data: any;
}

const BannerProjectDetail = ({ data }: Props) => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <div className="project-bg relative flex items-center justify-center h-[400px] lg:h-[450px] 2xl:h-[500px] overflow-hidden">
      <div
        className={clsx(
          "w-[130px] min-w-[130px] h-[220px] lg:w-[160px] lg:min-w-[160px] lg:h-[260px] 2xl:w-[200px] 2xl:min-w-[200px] 2xl:h-[320px]",
          "border-[30px] border-[#FCC457]"
        )}
      />
      <div className="absolute w-full max-w-[1210px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 z-[1]">
        <div
          data-aos="fade-right"
          className="container mx-auto text-[50px] lg:text-[60px] 2xl:text-[70px] font-bold"
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />
      </div>
    </div>
  );
};

export default BannerProjectDetail;
