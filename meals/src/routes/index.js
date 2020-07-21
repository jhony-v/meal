import { lazy } from "react";

const routes = {
  HOME: {
    path: "/",
    component: lazy(() => import("pages/Home")),
    SEARCH: {
      path: "/search",
    },
  },
  PROFILE: {
    path: "profile/:idUser",
    component: lazy(() => import("pages/Profile")),
  },
  CONFIGURATION: {
    path: "configuration",
    component: lazy(() => import("pages/ConfigurationProfile")),
  },
};

export default routes;
