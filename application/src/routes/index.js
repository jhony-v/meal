import React from "react";
import loadable from "@loadable/component";
import { UILoadingPage } from "shared/styled/UILoading";


const fallbackHomePage  = {
	fallback : <UILoadingPage/>
}

const routes = {
  HOME: {
    path: "/",
    component: loadable(()=>import("pages/Home"),fallbackHomePage),
    SEARCH: {
      path: "/search",
    },
  },
  PROFILE: {
    path: "/users/:idUser",
    component: loadable(() => import("pages/Profile"),fallbackHomePage),
  },
  CONFIGURATION: {
    path: "configuration",
    component: loadable(() => import("pages/ConfigurationProfile"),fallbackHomePage),
  },
};

export default routes;
