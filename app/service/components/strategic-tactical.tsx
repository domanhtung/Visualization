"use client";
import { strategicTacticalContent } from "@/app/constants/service";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const StrategicTactical = () => {
  const [idx, setIdx] = useState<number | undefined>();

  return (
    <div className="mt-10">
      {strategicTacticalContent?.map((value, index) => {
        return (
          <div key={value?.title}>
            <div
              className={clsx(
                "flex gap-1 px-5 py-2 items-center justify-between cursor-pointer",
                idx === index ? "bg-[#FCC457]" : "bg-[#2A2A2A]"
              )}
              onClick={() => setIdx(idx !== index ? index : undefined)}
            >
              <span className="text-[14px] font-medium">{value?.title}</span>
              <Image
                src={
                  idx === index
                    ? "/images/icons/icon_show.svg"
                    : "/images/icons/icon_hide.svg"
                }
                className="min-w-[12px]"
                width={12}
                height={12}
                priority
                alt="icon"
              />
            </div>
            <div className={clsx("duration-300 overflow-hidden", idx === index ? "" : "h-0")}>
              <div className="p-5 bg-white text-[14px] text-[#828282]">
                {value?.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StrategicTactical;
