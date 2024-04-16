import { pathnameObj } from "./header";

export const serviceKey = {
  interior: "interior-design",
  exterior: "exterior-design",
  architectural: "architectural-rendering",
  threedArchitec: "architectural-walkthrough",
  floorPlan: "floor-plan-rendering",
  threedBirdEye: "bird-eye-real-estate",
  productAnimation: "product-animation",
  architecturalAnimation: "architectural-animation",
  virtualReality: "virtual-reality",
  augmentedReality: "augmented-reality",
};

export const serviceDetailData = [
  {
    img: "/images/story_1.jpg",
    title: "Interior Design",
    key: serviceKey?.interior,
    url: `/${pathnameObj.service}/${serviceKey?.interior}`,
  },
  {
    img: "/images/story_2.jpg",
    title: "Exterior Design",
    key: serviceKey?.exterior,
    url: `/${pathnameObj.service}/${serviceKey?.exterior}`,
  },
  {
    img: "/images/story_3.jpg",
    title: "Architectural Rendering",
    key: serviceKey?.architectural,
    url: `/${pathnameObj.service}/${serviceKey?.architectural}`,
  },
  {
    img: "/images/story_4.jpg",
    title: "3D Architectural Walkthrough",
    key: serviceKey?.threedArchitec,
    url: `/${pathnameObj.service}/${serviceKey?.threedArchitec}`,
  },
  {
    img: "/images/story_5.jpg",
    title: "Floor Plan Rendering",
    key: serviceKey?.floorPlan,
    url: `/${pathnameObj.service}/${serviceKey?.floorPlan}`,
  },
  {
    img: "/images/story_6.jpg",
    title: "3D Bird Eye Real Estate",
    key: serviceKey?.threedBirdEye,
    url: `/${pathnameObj.service}/${serviceKey?.threedBirdEye}`,
  },
  {
    img: "/images/story_7.jpg",
    title: "Product Animation",
    key: serviceKey?.productAnimation,
    url: `/${pathnameObj.service}/${serviceKey?.productAnimation}`,
  },
  {
    img: "/images/story_8.jpg",
    title: "Architectural Animation",
    key: serviceKey?.architecturalAnimation,
    url: `/${pathnameObj.service}/${serviceKey?.architecturalAnimation}`,
  },
  {
    img: "/images/story_9.jpg",
    title: "Virtual Reality Animation",
    key: serviceKey?.virtualReality,
    url: `/${pathnameObj.service}/${serviceKey?.virtualReality}`,
  },
  {
    img: "/images/story_10.jpg",
    title: "Augmented Reality Animation",
    key: serviceKey?.augmentedReality,
    url: `/${pathnameObj.project}/${serviceKey?.augmentedReality}`,
  },
];

export const strategicTacticalContent = [
  {
    title: "OUR COMPANY MISSION",
    content:
      "We connect expertise across services, markets, and geographies to deliver transformative outcomes. Worldwide, we design, build, finance, operate and manage projects and programs that unlock opportunities.",
  },
  {
    title: "HONEST AND DEPENDANLE",
    content:
      "We connect expertise across services, markets, and geographies to deliver transformative outcomes. Worldwide, we design, build, finance, operate and manage projects and programs that unlock opportunities.",
  },
  {
    title: "OUR QUALITY",
    content:
      "We connect expertise across services, markets, and geographies to deliver transformative outcomes. Worldwide, we design, build, finance, operate and manage projects and programs that unlock opportunities.",
  },
];
