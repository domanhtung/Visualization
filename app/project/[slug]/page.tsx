import { projectDetailValue } from "@/app/constants/project";
import ProjectVideoShow from "../components/project-video";
import GrowSuccess from "../components/grow-success";
import ProjectView from "../components/project-view";
import WhatWeDo from "../components/what-we-do";
import ProjectContact from "../components/project-contact";
import MoreProject from "../components/more-project";
import BannerProjectDetail from "../components/banner-project";

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
