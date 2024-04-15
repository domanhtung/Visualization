import Image from "next/image";

const FeatureContactUs = () => {
  return (
    <div className="relative">
      <Image
        className="w-full h-auto"
        src={"/images/services/feature_5.jpg"}
        width={480}
        height={350}
        priority
        alt="feature"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black hover:opacity-40 opacity-30 z-[1] duration-300" />
      <div className="absolute bottom-0 left-0 p-5 2xl:p-8 z-[2]">
        <div className="text-[20px] 2xl:text-[35px] font-medium">Contact with Us</div>
        <p className="mt-2 text-[12px] 2xl:text-[14px] text-[#B8B8B8]">
          Connect with us to reduce complexity through digital transformation
          solutions. With a growing community of over 300,000 people, we
          specialize in assisting clients in bringing their products to market
          through a variety of channels, including campaigns, contests, and
          events.
        </p>
        <button className="btn btn-style3 mt-2 2xl:mt-8">contact us</button>
      </div>
    </div>
  );
};

export default FeatureContactUs;
