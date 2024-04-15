import { projectDetailValue } from "@/app/constants/project";
import Image from "next/image";

interface Props {
  data: any;
}

const ProjectVideoShow = ({ data }: Props) => {
  if (data?.video2 || data?.previewImg2) {
    return (
      <div className="py-10 2xl:py-20">
        <div className="container grid lg:grid-cols-2 mx-auto px-5 gap-5">
          <div className="lg:col-span-2 p-8 bg-white text-[20px] 2xl:text-[25px] text-[#383C50] opacity-60 font-neuton">
            {data?.content}
          </div>
          <div>
            {data?.video ? (
              <iframe
                className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
                width="420"
                height="315"
                src={data?.video}
              ></iframe>
            ) : (
              <Image
                src={data?.previewImg}
                className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
                width={755}
                height={500}
                priority
                alt="preview"
              />
            )}
          </div>
          <div className="block lg:hidden text-[#383C50] text-center uppercase font-semibold">
            {data?.previewTitle}
          </div>
          <div>
            {data?.video2 ? (
              <iframe
                className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
                width="420"
                height="315"
                src={data?.video2}
              ></iframe>
            ) : (
              <Image
                src={data?.previewImg2}
                className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
                width={755}
                height={500}
                priority
                alt="preview"
              />
            )}
          </div>
          <div className="hidden lg:block text-[#383C50] text-center uppercase font-semibold">
            {data?.previewTitle}
          </div>
          <div className="text-[#383C50] text-center uppercase font-semibold">
            {data?.previewTitle2}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 2xl:py-20">
      <div className="container grid lg:grid-cols-2 mx-auto px-5 gap-5">
        <div>
          {data?.video ? (
            <iframe
              className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
              width="420"
              height="315"
              src={data?.video}
            ></iframe>
          ) : (
            <Image
              src={data?.previewImg}
              className="w-full h-full min-h-[420px] 2xl:min-h-[474px]"
              width={860}
              height={500}
              priority
              alt="preview"
            />
          )}
        </div>
        <div className="block lg:hidden text-[14px] text-[#383C50] text-center uppercase font-semibold">
          {data?.previewTitle}
        </div>
        <div className="p-8 bg-white text-[18px] lg:text-[20px] 2xl:text-[25px] text-[#383C50] opacity-60 font-neuton">
          {data?.content}
        </div>
        <div className="hidden lg:block text-[#383C50] text-center uppercase font-semibold">
          {data?.previewTitle}
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoShow;
