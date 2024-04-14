import { projectDetailValue } from "@/app/constants/project";
import ProjectVideoShow from "../components/project-video";
import GrowSuccess from "../components/grow-success";
import ProjectView from "../components/project-view";
import WhatWeDo from "../components/what-we-do";
import ProjectContact from "../components/project-contact";
import MoreProject from "../components/more-project";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const currentProject: any = projectDetailValue?.find((p) => p.key === params.slug);

  if (!currentProject)
    return (
      <div className="project-bg relative flex items-center justify-center h-[500px]">
        <div className="w-[200px] min-w-[200px] h-[320px] border-[30px] border-[#FCC457]" />
        <div className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-[1]">
          <div
            className="container mx-auto text-[70px] font-bold"
            dangerouslySetInnerHTML={{ __html: currentProject?.title || "" }}
          />
        </div>
      </div>
    );

  return (
    <main className="bg-[#EEF1F2]">
      <div className="project-bg relative flex items-center justify-center h-[500px]">
        <div className="w-[200px] min-w-[200px] h-[320px] border-[30px] border-[#FCC457]" />
        <div className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-[1]">
          <div
            className="container mx-auto text-[70px] font-bold"
            dangerouslySetInnerHTML={{ __html: currentProject?.title || "" }}
          />
        </div>
      </div>
      <ProjectVideoShow data={currentProject} />
      <GrowSuccess data={currentProject} />
      <ProjectView data={currentProject} />
      <WhatWeDo />
      <ProjectContact />
      <MoreProject data={currentProject} />
    </main>
  );
}
