import { serviceData } from "@/app/constants/home";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: any;
}

const MoreProject = ({ data }: Props) => {
  const otherProject = serviceData?.filter(
    (service) => service?.projectKey !== data?.key && !service?.isBigger
  );

  return (
    <div className="pb-20">
      <div className="max-w-[1170px] mx-auto py-5 text-[30px] text-[#2A2F35] uppercase">
        More projects
      </div>
      <div className="grid grid-cols-4">
        {otherProject?.map((service, index) => {
          if (index > 3) return null;
          return (
            <div
              key={service?.key}
              className={clsx(
                "relative overflow-hidden group",
                service?.isBigger && "col-span-2"
              )}
            >
              <Image
                src={service?.img}
                className="w-full h-full group-hover:scale-105 duration-500"
                width={480}
                height={480}
                priority
                alt="service"
              />
              <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30 z-[1]"></div>
              <div className="absolute top-0 left-0 p-8 z-[2]">
                <p className="text-[10px] uppercase">{service?.keyName}</p>
                <p className="text-[20px] uppercase">{service?.project}</p>
                <p className="h-[52px] py-4 text-[13px]">{service?.location}</p>
                <Link href={service?.url}>
                  <button className="px-5 py-2 border-[3px] hover:text-black hover:bg-[#FBBE3F] border-[#FBBE3F] text-[#FBBE3F] duration-200">
                    View more
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreProject;
