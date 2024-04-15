import Image from "next/image";

const ContactUsHome = () => {
  return (
    <div className="relative">
      <Image
        src={"/images/contact_us_home.jpg"}
        className="w-full h-[300px] lg:h-auto max-h-[500px] object-cover"
        width={1920}
        height={510}
        priority
        alt="contact img"
      />
      <div className="absolute px-5 md:px-[95px] top-1/2 left-0 -translate-y-1/2">
        <div className="text-[12px] lg:text-[14px] 2xl:text-[16px]">WORKING WITH US</div>
        <div className="mt-3 text-[22px] lg:text-[30px] 2xl:text-[35px] font-medium">
          WE ARE BIGGEST COMMUNITY OF EXPERTS
          <br />
          ARCHITECTS AND DESIGNERS IN VIETNAM
        </div>
        <div className="flex gap-3 mt-5">
          <button className="btn btn-style1">Contact us</button>
          <button className="btn btn-style2">join community</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHome;
