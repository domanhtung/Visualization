import Image from "next/image";
import { serviceData } from "../constants/home";
import clsx from "clsx";
import Link from "next/link";

const ServiceHome = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4">
      {serviceData?.map((service) => {
        return (
          <div
            key={service?.key}
            data-aos="zoom-in"
            className={clsx(
              "relative overflow-hidden group h-[300px] sm:h-auto",
              service?.isBigger && "sm:col-span-2"
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
            <div className="absolute top-0 left-0 p-5 2xl:p-8 z-[2]">
              <p className="text-[10px] uppercase">{service?.keyName}</p>
              <p className="text-[18px] 2xl:text-[20px] uppercase">
                {service?.project}
              </p>
              <p className="h-[52px] py-4 text-[13px]">{service?.location}</p>
              <Link href={service?.url}>
                <button className="px-5 py-2 border-[3px] text-[14px] hover:text-black hover:bg-[#FBBE3F] border-[#FBBE3F] text-[#FBBE3F] duration-200">
                  View more
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceHome;
