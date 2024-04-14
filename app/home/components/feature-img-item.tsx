"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  icon: string;
  title: string;
  img?: string;
  color?: string;
  url: string;
}

const FeatureImageItem = ({ icon, title, img, color, url }: Props) => {
  return (
    <div style={{ backgroundColor: color ?? "" }} className="relative group">
      {img && (
        <>
          <Image
            className="w-full h-auto"
            src={img}
            width={480}
            height={350}
            priority
            alt="feature"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black hover:opacity-40 opacity-30 z-[1] duration-300" />
        </>
      )}
      <div className="absolute bottom-0 left-0 p-8 z-[2]">
        <Image
          src={icon}
          className="min-w-[24px] object-contain"
          width={24}
          height={29}
          priority
          alt="icon"
        />
        <p
          className={clsx(
            "flex h-[40px] my-4 items-center text-[20px] leading-[22px] font-medium",
            color && "text-[#2A2F35]"
          )}
        >
          {title}
        </p>
        <div className="flex">
          <Link
            href={url}
            className="flex gap-2 hover:gap-3 items-center text-[12px] text-[#FBBE3F] uppercase duration-150"
            target={"_blank"}
          >
            read more{" "}
            <Image
              src={"/images/icons/link.svg"}
              width={10}
              height={12}
              priority
              alt="link"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureImageItem;
