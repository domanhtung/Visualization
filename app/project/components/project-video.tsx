import { projectDetailValue } from "@/app/constants/project";

interface Props {
  data: any;
}

const ProjectVideoShow = ({ data }: Props) => {
  if (data?.video2) {
    return (
      <div className="py-20">
        <div className="container grid grid-cols-2 mx-auto gap-5">
          <div className="col-span-2 p-8 bg-white text-[25px] text-[#383C50] opacity-60 font-neuton">
            {data?.content}
          </div>
          <div>
            <iframe
              className="w-full h-full min-h-[474px]"
              width="420"
              height="315"
              src={data?.video}
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full h-full min-h-[474px]"
              width="420"
              height="315"
              src={data?.video2}
            ></iframe>
          </div>
          <div className="text-[#383C50] text-center uppercase font-semibold">
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
    <div className="py-20">
      <div className="container grid grid-cols-2 mx-auto gap-5">
        <div>
          <iframe
            className="w-full h-full min-h-[474px]"
            width="420"
            height="315"
            src={data?.video}
          ></iframe>
        </div>
        <div className="p-8 bg-white text-[25px] text-[#383C50] opacity-60 font-neuton">
          {data?.content}
        </div>
        <div className="text-[#383C50] text-center uppercase font-semibold">
          {data?.previewTitle}
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoShow;
