import { serviceDetailData } from "@/app/constants/service";
import clsx from "clsx";

interface Props {
  data: any;
}

const ServiceLeftBar = ({ data }: Props) => {
  return (
    <div>
      <div className="bg-[#2A2F35]">
        {serviceDetailData?.map((value) => {
          return (
            <div
              key={value?.title}
              className={clsx(
                "px-5 py-2 text-[14px] text-[#B8B8B8] bg-white bg-opacity-15 border-b border-[#B8B8B8]",
                "cursor-pointer hover:bg-[#FCC457] hover:text-[#2A2F35]",
                data?.key === value?.key && "!bg-[#FCC457] !text-[#2A2F35]"
              )}
            >
              {value?.title}
            </div>
          );
        })}
      </div>
      <div className="mt-8 py-10 px-8 bg-[#FCC457]">
        <div className="text-[20px] text-[#2A2F35] leading-[22px] font-medium">
          Do you have any
          <br />
          questions?
        </div>
        <p className="mt-5 text-[14px] text-[#2A2F35]">
          Contact us at the TheBuilt WP office nearest to you or submit a
          business inquiry online
        </p>
        <button className="btn btn-style3 mt-5">Contact us</button>
      </div>
      <div className="mt-8">
        <div className="text-[#2A2F35]">Working time</div>
        <p className="mt-3 text-[14px] text-[#222222] font-bold">
          Our support available to help you 24 hours a day, seven days a week.
        </p>
        <div className="flex gap-1 mt-2 items-center text-[14px] text-[#222222]">
          <div className="w-[14px] h-[14px] text-[6px] text-center font-bold text-[#222222] border-[2px] border-[#222222] rounded-full">
            L
          </div>
          <span className="text-[#222222] font-bold">Monday-Friday:</span> 9am
          to 5pm
        </div>
        <div className="flex gap-1 mt-2 items-center text-[14px] text-[#222222]">
          <div className="w-[14px] h-[14px] text-[6px] text-center font-bold text-[#222222] border-[2px] border-[#222222] rounded-full">
            L
          </div>
          <span className="text-[#222222] font-bold"> Saturday:</span> 10am to
          2pm
        </div>
        <div className="flex gap-1 mt-2 items-center text-[14px] text-[#222222]">
          <div className="w-[14px] h-[14px] text-[8px] leading-[9px] text-center font-bold text-[#222222] border-[2px] border-[#222222] rounded-full">
            x
          </div>
          <span className="text-[#222222] font-bold"> Sunday:</span> Closed
        </div>
      </div>
    </div>
  );
};

export default ServiceLeftBar;
