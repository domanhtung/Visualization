export const pathnameObj = {
  home: "home",
  project: "project",
  projectDetail: "project-detail",
  about: "about",
  blog: "blog",
};

export const navbarList = [
  {
    key: pathnameObj.home,
    name: "Home",
    url: "/",
  },
  {
    key: pathnameObj.project,
    name: "Projects",
    url: `/${pathnameObj.project}`,
  },
  {
    key: pathnameObj.projectDetail,
    name: "Projects Details",
    url: `/${pathnameObj.projectDetail}`,
  },
  {
    key: pathnameObj.about,
    name: "About US",
    url: `/${pathnameObj.about}`,
  },
  {
    key: pathnameObj.blog,
    name: "Blog",
    url: `/${pathnameObj.blog}`,
  },
];
