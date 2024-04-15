import Image from "next/image";

interface Props {
  data: any;
}

const GrowSuccess = ({ data }: Props) => {
  return (
    <div className="project-grow-bg py-10 2xl:py-16 px-5 2xl:px-8">
      <div className="text-center text-[26px] lg:text-[30px] 2xl:text-[37px] font-bold">
        GROW & SUCCEED
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-0 mt-5 lg:mt-8 items-center">
        <div className="flex gap-3 md:justify-center">
          <Image
            src={"/images/icons/client.svg"}
            className="w-[26px] min-w-[26px] h-[30px] 2xl:w-[35px] 2xl:min-w-[35px] 2xl:h-[40px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[18px] lg:text-[20px] 2xl:text-[32px] font-bold">
              CLIENT
            </div>
            <div className="text-[14px] lg:text-[16px] 2xl:text-[27px] font-neuton">
              {data?.client}
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:justify-center">
          <Image
            src={"/images/icons/location.svg"}
            className="w-[26px] min-w-[26px] h-[30px] 2xl:w-[35px] 2xl:min-w-[35px] 2xl:h-[40px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[20px] 2xl:text-[32px] font-bold">
              LOCATION
            </div>
            <div className="text-[16px] 2xl:text-[27px] font-neuton">
              {data?.location}
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:justify-center">
          <Image
            src={"/images/icons/area.svg"}
            className="w-[26px] min-w-[26px] h-[30px] 2xl:w-[35px] 2xl:min-w-[35px] 2xl:h-[40px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[20px] 2xl:text-[32px] font-bold">
              SURFACE AREA
            </div>
            <div className="text-[16px] 2xl:text-[27px] font-neuton">
              {data?.area}
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:justify-center">
          <Image
            src={"/images/icons/effort.svg"}
            className="w-[26px] min-w-[26px] h-[30px] 2xl:w-[35px] 2xl:min-w-[35px] 2xl:h-[40px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[20px] 2xl:text-[32px] font-bold">EFFORT</div>
            <div className="text-[16px] 2xl:text-[27px] font-neuton">
              {data?.effort}
            </div>
          </div>
        </div>
        <div className="flex gap-3 md:justify-center">
          <Image
            src={"/images/icons/completed.svg"}
            className="w-[26px] min-w-[26px] h-[30px] 2xl:w-[35px] 2xl:min-w-[35px] 2xl:h-[40px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[20px] 2xl:text-[32px] font-bold">
              COMPLETED
            </div>
            <div className="text-[16px] 2xl:text-[27px] font-neuton">
              {data?.completed}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowSuccess;
