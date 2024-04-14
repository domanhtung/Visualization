import Image from "next/image";

interface Props {
  data: any;
}

const GrowSuccess = ({ data }: Props) => {
  return (
    <div className="project-grow-bg py-16 px-8">
      <div className="text-center text-[37px] font-bold">GROW & SUCCEED</div>
      <div className="grid grid-cols-5 mt-8 items-center">
        <div className="flex gap-3 justify-center">
          <Image
            src={"/images/icons/client.svg"}
            className="min-w-[35px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[32px] font-bold">CLIENT</div>
            <div className="text-[27px] font-neuton">{data?.client}</div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Image
            src={"/images/icons/location.svg"}
            className="min-w-[35px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[32px] font-bold">LOCATION</div>
            <div className="text-[27px] font-neuton">{data?.location}</div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Image
            src={"/images/icons/area.svg"}
            className="min-w-[35px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[32px] font-bold">SURFACE AREA</div>
            <div className="text-[27px] font-neuton">{data?.area}</div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <Image
            src={"/images/icons/effort.svg"}
            className="min-w-[35px]"
            width={35}
            height={40}
            priority
            alt="client"
          />
          <div>
            <div className="text-[32px] font-bold">EFFORT</div>
            <div className="text-[27px] font-neuton">{data?.effort}</div>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          {/* <Image
            src={"/images/icons/effort.svg"}
            className="min-w-[35px]"
            width={35}
            height={40}
            priority
            alt="client"
          /> */}
          <div>
            <div className="text-[32px] font-bold">COMPLETED</div>
            <div className="text-[27px] font-neuton">{data?.completed}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowSuccess;
