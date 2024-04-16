import { pathnameObj } from "./header";
import { projectKey } from "./project";
import { serviceKey } from "./service";

export const heroBannerContent = [
  {
    img: "/images/hero_1.jpg",
    content: "Visualization Creative Studio",
    type: "About us",
    typeList: ["About us", "Services", "Welcome"],
  },
  {
    img: "/images/hero_2.jpg",
    content: "Global Community of Architects for Service Design Network",
    type: "Services",
    typeList: ["About us", "Services", "Welcome"],
  },
  {
    img: "/images/hero_3.jpg",
    content: "Design's Journey to Making Sense of Life",
    type: "Welcome",
    typeList: ["About us", "Services", "Welcome"],
  },
];

export const bannerNavigation = [
  {
    img: "/images/banner_more_1.png",
    icon: "/images/icons/about_company.svg",
    title: "ABOUT <br/> COMPANY",
    url: "",
  },
  {
    img: "/images/banner_more_2.png",
    icon: "/images/icons/get_quote.svg",
    title: "GET A <br/> QUOTE",
    url: "",
  },
  {
    img: "/images/banner_more_3.png",
    icon: "/images/icons/design_interior.svg",
    title: "DESIGN AND <br/> INTERIOR",
    url: "",
  },
  {
    img: "/images/banner_more_4.png",
    icon: "/images/icons/work_archibuild.svg",
    title: "WORK WITH <br/> ARCHIBUILD",
    url: "",
  },
];
export const homeStoryContents = [
  {
    img: "/images/story_1.jpg",
    title: "Interior Design",
    content:
      "The best rooms have something to say about the people who live in them.",
    url: `/${pathnameObj.service}/${serviceKey?.interior}`,
  },
  {
    img: "/images/story_2.jpg",
    title: "Exterior Design",
    content:
      "As an architects, we design for the present with an awareness of the past for a future which is essentially unknown.",
    url: `/${pathnameObj.service}/${serviceKey?.exterior}`,
  },
  {
    img: "/images/story_3.jpg",
    title: "Architectural Rendering",
    content:
      "My architecture is easy to understand and enjoy, I hope it also is hard to forget.",
    url: `/${pathnameObj.service}/${serviceKey?.architectural}`,
  },
  {
    img: "/images/story_4.jpg",
    title: "3D Architectural Walkthrough",
    content: "Styles come and go. Good design is a language, not a style.",
    url: `/${pathnameObj.service}/${serviceKey?.threedArchitec}`,
  },
  {
    img: "/images/story_5.jpg",
    title: "Floor Plan Rendering",
    content: "Real comfort, visual and physical, is vital to every room.",
    url: `/${pathnameObj.service}/${serviceKey?.floorPlan}`,
  },
  {
    img: "/images/story_6.jpg",
    title: "3D Bird Eye Real Estate",
    content: "When we build, let us think that we build forever.",
    url: `/${pathnameObj.service}/${serviceKey?.threedBirdEye}`,
  },
  {
    img: "/images/story_7.jpg",
    title: "Product Animation",
    content:
      "Animation offers a medium of story telling and visual entertainment which can bring pleasure and information to people of all ages everywhere in the world.",
    url: `/${pathnameObj.service}/${serviceKey?.productAnimation}`,
  },
  {
    img: "/images/story_8.jpg",
    title: "Architectural Animation",
    content: "Animation can explain whatever the mind of man can conceive.",
    url: `/${pathnameObj.service}/${serviceKey?.architecturalAnimation}`,
  },
  {
    img: "/images/story_9.jpg",
    title: "Virtual Reality (VR) Animation",
    content:
      "In the past, before phones and the Internet, all communication was face-to-face. Now, most of it is digital, via emails and messaging services. If people were to start using virtual reality, it would almost come full circle.",
    url: `/${pathnameObj.service}/${serviceKey?.virtualReality}`,
  },
  {
    img: "/images/story_10.jpg",
    title: "Augmented Reality (AR) Animation",
    content:
      "Simply put, we believe augmented reality is going to change the way we use technology forever. We’re already seeing things that will transform the way you work, play, connect and learn.",
    url: `/${pathnameObj.project}/${serviceKey?.augmentedReality}`,
  },
];

export const projectData = [
  {
    icon: "/images/icons/data_1.svg",
    title: "PROJECTS",
    data: 101,
  },
  {
    icon: "/images/icons/data_2.svg",
    title: "HAPPY CLIENTS",
    data: 187,
  },
  {
    icon: "/images/icons/data_3.svg",
    title: "QUALIFIED STUFF",
    data: 154,
  },
  {
    icon: "/images/icons/data_4.svg",
    title: "DESIGNS",
    data: 513,
  },
];
export const serviceData = [
  {
    img: "/images/services/game.jpg",
    key: "game",
    keyName: "game",
    projectKey: projectKey.metaverse,
    project: "METACITY",
    location: "Metaverse",
    url: `/${pathnameObj?.project}/${projectKey?.metaverse}`,
  },
  {
    img: "/images/services/design.jpg",
    key: "design",
    keyName: "Interior design",
    projectKey: projectKey.interiorDesign,
    project: "META OFFICE",
    location: "Hanoi",
    url: `/${pathnameObj?.project}/${projectKey?.interiorDesign}`,
  },
  {
    img: "/images/services/architecture.jpg",
    key: "architecture",
    keyName: "architecture design & walkthrough",
    projectKey: projectKey.architectureDesign,
    project: "SUNSHIRE",
    location: "Nha Trang",
    isBigger: true,
    url: `/${pathnameObj?.project}/${projectKey?.architectureDesign}`,
  },
  {
    img: "/images/services/vr360.jpg",
    key: "vr360",
    keyName: "VR360 Visualization",
    projectKey: projectKey.vr360,
    project: "SUNSHIRE",
    location: "Nha Trang",
    url: `/${pathnameObj?.project}/${projectKey?.vr360}`,
  },
  {
    img: "/images/services/3dvr.jpg",
    key: "3dvr",
    keyName: "3D VR SOLUTION",
    projectKey: projectKey.threeDVR,
    project: "VIRTUAL HOME",
    location: "Ho Chi Minh",
    url: `/${pathnameObj?.project}/${projectKey?.threeDVR}`,
  },
  {
    img: "/images/services/augmented.jpg",
    key: "augmented",
    keyName: "augmented reality",
    projectKey: projectKey.augmentedReality,
    project: "3D PRODUCT VISUALIZATION",
    location: "",
    url: `/${pathnameObj?.project}/${projectKey?.augmentedReality}`,
  },
  {
    img: "/images/services/museum.jpg",
    key: "museum",
    keyName: "museum interior",
    projectKey: projectKey.museumInterior,
    project: "CULTURAL HOUSE",
    location: "Binh Thuan",
    url: `/${pathnameObj?.project}/${projectKey?.museumInterior}`,
  },
];
export const clientReview = [
  {
    comment:
      "Wonderful design! Working with the team was easy because they were always on time and could clearly explain what was needed. The Archibuild team was very helpful and quickly took care of any small changes we requested once the product was released. Thank you; I'm really happy with how everything turned out.",
    img: "/images/client_1.jpg",
    name: "Georg Brown",
    position: "Seo Company",
  },
  {
    comment:
      "Working with Archibuild was a breeze from beginning to end. Their team was attentive, accommodating, and prepared to go above and above to ensure our pleasure. The 3D models they generated enabled us to envisage our concept in ways we never imagined possible.",
    img: "/images/client_2.jpg",
    name: "Adriana Svendsen",
    position: "Creative Manager",
  },
  {
    comment:
      "Archibuild's work quality left us very delighted. Their visualization capabilities enabled us to present our design concepts with clarity and precision. Their 3D graphics stand out due to their meticulous attention to detail.",
    img: "/images/client_3.jpg",
    name: "Amalia Edinson",
    position: "Founder of CCP",
  },
];
