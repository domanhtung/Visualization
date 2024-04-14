import Image from "next/image";
import { projectData } from "../constants/home";

const ProjectData = () => {
  return (
    <div className="project-data grid grid-cols-4 px-5 items-center justify-center">
      {projectData?.map((data, index) => {
        return (
          <div key={index} className="text-center">
            <Image
              src={data?.icon}
              className="mx-auto"
              width={32}
              height={31}
              priority
              alt="icon"
            />
            <p className="py-1 text-[36px] font-bold">{data?.data}</p>
            <p className="text-[18px] font-medium">{data?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectData;
