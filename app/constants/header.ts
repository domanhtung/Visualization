export const pathnameObj = {
  home: "home",
  project: "project",
  service: "service",
  about: "about",
  blog: "blog",
};

export const navbarList = [
  {
    name: "Home",
    url: "/",
  },
  {
    key: pathnameObj.service,
    name: "Services",
    url: `/${pathnameObj.service}`,
  },
  {
    key: pathnameObj.project,
    name: "Projects",
    url: `/${pathnameObj.project}`,
  },
  {
    key: pathnameObj.about,
    name: "About Us",
    url: `/${pathnameObj.about}`,
  },
  {
    key: pathnameObj.blog,
    name: "Blog",
    url: `/${pathnameObj.blog}`,
  },
];
