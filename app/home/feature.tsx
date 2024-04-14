import Image from "next/image";
import FeatureImageItem from "./components/feature-img-item";
import FeaturePortfolio from "./components/feature-portfolio";
import FeatureContactUs from "./components/feature-contact-us";
import FeatureMap from "./components/feature-map";

const FeatureHome = () => {
  return (
    <div className="grid grid-cols-4">
      <FeatureImageItem
        icon="/images/icons/feature_1.svg"
        title="3D VISUALIZATION"
        img="/images/services/feature_1.jpg"
        url=""
      />
      <FeatureImageItem
        icon="/images/icons/feature_3.svg"
        title="3D MODELING"
        color="#EE4D5D"
        url=""
      />
      <FeaturePortfolio />
      <FeatureImageItem
        icon="/images/icons/feature_5.svg"
        title="3D VISUALIZATION"
        img="/images/services/feature_3.jpg"
        url=""
      />
      <FeatureImageItem
        icon="/images/icons/feature_2.svg"
        title="GENERATIVE AI VIRTUAL STAGING"
        color="#39BEC7"
        url=""
      />
      <FeatureImageItem
        icon="/images/icons/feature_4.svg"
        title="ARCHITECTURE & BUILDING"
        img="/images/services/feature_2.jpg"
        url=""
      />
      <FeatureImageItem
        icon="/images/icons/feature_6.svg"
        title="NETWORKING"
        color="#FCC457"
        url=""
      />
      <div className="relative col-span-2">
        <Image
          src={"/images/services/feature_4.jpg"}
          className="w-full h-auto"
          width={960}
          height={500}
          priority
          alt="service"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black hover:opacity-40 opacity-30 z-[1] duration-300" />
      </div>
      <FeatureContactUs />
      <FeatureMap />
    </div>
  );
};

export default FeatureHome;
