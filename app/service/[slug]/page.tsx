import { serviceDetailData } from "@/app/constants/service";
import BannerServiceDetail from "../components/banner-service";
import ServiceLeftBar from "../components/service-left-bar";
import ServiceRightContent from "../components/service-right-content";

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const currentService = serviceDetailData?.find((p) => p.key === params.slug);

  if (!currentService) return <BannerServiceDetail data={""} />;

  return (
    <main className="bg-[#EEF1F2]">
      <BannerServiceDetail data={currentService} />
      <div className="max-w-[1210px] mx-auto pt-8 pb-8 lg:pb-20 px-5">
        <div className="grid lg:flex gap-5 lg:gap-8">
          <div className="order-1 lg:order-2 w-full">
            <ServiceRightContent data={currentService} />
          </div>
          <div className="order-2 lg:order-1 w-full lg:w-[270px] lg:min-w-[270px]">
            <ServiceLeftBar data={currentService} />
          </div>
        </div>
      </div>
    </main>
  );
}
