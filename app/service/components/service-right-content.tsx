import { serviceData } from "@/app/constants/home";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import StrategicTactical from "./strategic-tactical";

interface Props {
  data: any;
}

const ServiceRightContent = ({ data }: Props) => {
  const currentService = serviceData?.filter((data) => !data?.isBigger);

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2">
        <div className="p-8 bg-white">
          <div className="text-[14px] lg:text-[16px] text-[#2A2F35] font-medium">
            at Archibuild Studio, we serve
          </div>
          <div className="mt-2 text-[24px] lg:text-[30px] text-[#2A2F35] font-bold">
            {data?.title}
          </div>
          <p className="mt-2 text-[14px] text-[#828282]">
            Archibuild Studio offers innovative interior design services. Our
            team takes your ideas and turn them into reality, creating
            one-of-a-kind places that are a perfect blend of form and function,
            all while paying close attention to detail to ensure that they
            reflect your personality and your vision.
          </p>
          <button className="btn btn-style1 mt-5">Get a quote</button>
        </div>
        <div className="relative">
          <Image
            src={"/images/services/interior_design_1.jpg"}
            className="w-full h-full object-cover"
            width={435}
            height={400}
            priority
            alt="img"
          />
          <div className="absolute w-full px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            The best rooms have something to say about the people who live in
            them.
          </div>
        </div>
      </div>
      <div className="mt-6 text-[20px] text-[#2A2F35] font-bold">
        Construction Consultant
      </div>
      <div className="w-[45px] h-[1px] mt-2 mb-5 bg-[#FCC457]" />
      <p className="mt-3 text-[14px] text-[#222222]">
        We remain true to the same principles on which our company was founded
        over a hundred years ago: providing superior service to our clients,
        putting safety first, creating opportunities for our people, delivering
        exceptional work, fostering innovation, acting with integrity, and
        strengthening our communities. These tenets unite us as one company, and
        guide every aspect of our business.
      </p>
      <p className="mt-3 text-[14px] text-[#222222]">
        We are a global network of experts working with clients, communities and
        colleagues to develop and implement innovative solutions to the world’s
        most complex challenge.
      </p>
      <div className="grid sm:grid-cols-3 mt-10">
        {currentService?.map((service, index) => {
          if (index > 2) return null;

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
      <div className="grid sm:grid-cols-2 gap-8 mt-10">
        <div>
          <div className="text-[20px] text-[#2A2F35] font-bold">
            The Process
          </div>
          <div className="w-[45px] h-[1px] mt-2 mb-5 bg-[#FCC457]" />
          <p className="mt-3 text-[14px] text-[#222222]">
            We remain true to the same principles on which our company was
            founded over a hundred years ago: providing superior service to our
            clients, putting safety first, creating opportunities for our
            people, delivering exceptional work, fostering innovation, acting
            with integrity, and strengthening our communities.
          </p>
          <p className="mt-3 text-[14px] text-[#222222]">
            Construction is the process of constructing a building or
            infrastructure. Construction differs from manufacturing in that
            manufacturing typically involves mass production of similar items
            without a designated purchaser.
          </p>
        </div>
        <div>
          <div className="p-8 bg-[#2A2F35]">
            <div>ABOUT THEBUILT</div>
            <div className="pt-3 pb-8 text-[14px] text-[#B8B8B8]">
              Construction differs from manufacturing in that manufacturing
              typically involves mass production of similar items without a
              purchaser.
            </div>
            <div className="flex w-fit gap-2 items-center cursor-pointer hover:gap-3 duration-150">
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
      </div>
      {/* -------------------- */}
      <div className="grid sm:grid-cols-2 gap-8 mt-10">
        <div>
          <div className="text-[20px] text-[#2A2F35] font-bold">
            Service Brochure
          </div>
          <div className="w-[45px] h-[1px] mt-2 mb-5 bg-[#FCC457]" />
          <Image
            src={"/images/services/interior_design_2.jpg"}
            className="w-full h-auto"
            width={420}
            height={294}
            priority
            alt="img"
          />
          <p className="mt-3 text-[14px] text-[#222222]">
            At TheBuilt we are committed to green building and sustainability in
            our offices as well as on our job sites. We believe green buildings
            are not only good for the environment, they also provide immediate
            and long-term economic benefits.
          </p>
        </div>
        <div>
          <div className="text-[20px] text-[#2A2F35] font-bold">
            Strategic and Tactical
          </div>
          <div className="w-[45px] h-[1px] mt-2 mb-5 bg-[#FCC457]" />
          <p className="mt-3 text-[14px] text-[#222222]">
            Construction as an industry comprises six to nine percent of the
            gross domestic product of developed countries. Construction starts
            with planning, design, and financing and continues until the project
            is built and ready for use.
          </p>
          <StrategicTactical />
        </div>
      </div>
      {/* -------------------- */}
      <div className="grid sm:grid-cols-2 gap-8 mt-10">
        <div>
          <div className="text-[20px] text-[#2A2F35] font-bold">
            The Process
          </div>
          <div className="w-[45px] h-[1px] mt-2 mb-5 bg-[#FCC457]" />
          <p className="mt-3 text-[14px] text-[#222222]">
            We remain true to the same principles on which our company was
            founded over a hundred years ago: providing superior service to our
            clients, putting safety first, creating opportunities for our
            people, delivering exceptional work, fostering innovation, acting
            with integrity, and strengthening our communities.
          </p>
          <p className="mt-3 text-[14px] text-[#222222]">
            Construction is the process of constructing a building or
            infrastructure. Construction differs from manufacturing in that
            manufacturing typically involves mass production of similar items
            without a designated purchaser.
          </p>
        </div>
        <div>
          <div className="p-8 bg-[#FCC457]">
            <div className="text-[20px] text-[#2A2F35]">
              Do you have any
              <br />
              questions?
            </div>
            <div className="pt-3 text-[14px] text-[#2A2F35]">
              Construction differs from manufacturing in that manufacturing
              typically involves mass production of similar items without a
              purchaser.
            </div>
            <button className="btn btn-style3 mt-5">contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceRightContent;
