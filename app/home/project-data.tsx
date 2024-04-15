"use client";
import Image from "next/image";
import { projectData } from "../constants/home";
import { useEffect, useRef, useState } from "react";

interface Props {
  data: any;
}

const ProjectDataItem = ({ data }: Props) => {
  let currentNumber = 0;
  const ref = useRef<any>();
  const currentRef = useRef<any>();
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (currentRef?.current) {
      const observer = new IntersectionObserver(function (entries) {
        if (entries?.[0]?.isIntersecting) {
          setIsAnimate(true);
          observer?.unobserve(currentRef?.current);
        }
      }, {});
      observer?.observe(currentRef?.current);
      return () =>
        observer?.unobserve &&
        currentRef?.current &&
        observer?.unobserve(currentRef?.current);
    }
  }, []);

  useEffect(() => {
    if (isAnimate) {
      console.log(isAnimate);
      const numberPercent = data?.data > 50 ? Math?.floor(data?.data / 50) : 1;
      const intervalId = setInterval(() => {
        if (ref?.current) {
          currentNumber += numberPercent;
          if (currentNumber >= data?.data) {
            ref.current.innerHTML = data?.data;
            clearInterval(intervalId);
          } else {
            ref.current.innerHTML = currentNumber;
          }
        }
      }, 60);
      return () => clearInterval(intervalId);
    }
  }, [isAnimate]);

  return (
    <div className="text-center">
      <Image
        src={data?.icon}
        className="w-[28px] h-[27px] 2xl:w-[28px] 2xl:h-[31px] mx-auto"
        width={32}
        height={31}
        priority
        alt="icon"
      />
      <p ref={ref} className="py-1 text-[32px] 2xl:text-[36px] font-bold">
        0
      </p>
      <p ref={currentRef} className="text-[16px] 2xl:text-[18px] font-medium">
        {data?.title}
      </p>
    </div>
  );
};

const ProjectData = () => {
  return (
    <div className="project-data grid grid-cols-2 md:grid-cols-4 px-5 items-center justify-center">
      {projectData?.map((data) => {
        return <ProjectDataItem key={data?.title} data={data} />;
      })}
    </div>
  );
};

export default ProjectData;
