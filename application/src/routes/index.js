import React from "react";
import loadable from "@loadable/component";
import { UILoadingPage } from "shared/styled/UILoading";

const fallbackPage = {
	fallback: <UILoadingPage />,
};

const routes = {
	HOME: {
		path: "/",
		component: loadable(() => import("pages/Home"), fallbackPage),
		SEARCH: {
			path: "/search",
		},
	},
	PROFILE: {
		path: "/users/:idUser",
		component: loadable(() => import("pages/Profile"), fallbackPage),
		routes: {
			DEFAUT: {
				path: "/",
				component: loadable(() => import("pages/Profile/ProfileModules/ProfileDefault")),
			},
			ABOUT: {
				path: "about",
				component: loadable(() => import("pages/Profile/ProfileModules/ProfileAbout")),
			},
			ASSETS: {
				path: "assets",
				component: loadable(() => import("pages/Profile/ProfileModules/ProfileAssets")),
			},
		},
	},
	CONFIGURATION: {
		path: "configuration",
		component: loadable(() => import("pages/ConfigurationProfile"),fallbackPage),
	},
};

export default routes;
