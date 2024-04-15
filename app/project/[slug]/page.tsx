import { projectDetailValue } from "@/app/constants/project";
import ProjectVideoShow from "../components/project-video";
import GrowSuccess from "../components/grow-success";
import ProjectView from "../components/project-view";
import WhatWeDo from "../components/what-we-do";
import ProjectContact from "../components/project-contact";
import MoreProject from "../components/more-project";
import clsx from "clsx";

interface Props {
  data: any;
}

const BannerProjectDetail = ({ data }: Props) => {
  return (
    <div className="project-bg relative flex items-center justify-center h-[400px] lg:h-[450px] 2xl:h-[500px]">
      <div
        className={clsx(
          "w-[130px] min-w-[130px] h-[220px] lg:w-[160px] lg:min-w-[160px] lg:h-[260px] 2xl:w-[200px] 2xl:min-w-[200px] 2xl:h-[320px]",
          "border-[30px] border-[#FCC457]"
        )}
      />
      <div className="absolute w-full max-w-[1210px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 z-[1]">
        <div
          className="container mx-auto text-[50px] lg:text-[60px] 2xl:text-[70px] font-bold"
          dangerouslySetInnerHTML={{ __html: data?.title || "" }}
        />
      </div>
    </div>
  );
};

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const currentProject: any = projectDetailValue?.find(
    (p) => p.key === params.slug
  );

  if (!currentProject) return <BannerProjectDetail data={currentProject} />;

  return (
    <main className="bg-[#EEF1F2]">
      <BannerProjectDetail data={currentProject} />
      <ProjectVideoShow data={currentProject} />
      <GrowSuccess data={currentProject} />
      <ProjectView data={currentProject} />
      <WhatWeDo />
      <ProjectContact />
      <MoreProject data={currentProject} />
    </main>
  );
}
