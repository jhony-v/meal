import React from "react";
import loadable from "@loadable/component";
import { UILoadingPage } from "shared/styled/UILoading.styled";
import { MRoutes } from "./routes.types";

const fallbackPage = {
	fallback: <UILoadingPage />,
};

const routes : MRoutes.RouterCreator = {
	HOME: {
		path: "/",
		component: loadable(() => import("pages/Home"), fallbackPage),
		routes : {
			SEARCH: {
				path: "/search",
			},
		}
	},
	PROFILE: {
		path: "/users/:idUser",
		component: loadable(() => import("pages/Profile"), fallbackPage),
		routes: {
			DEFAULT: {
				path: "/",
				component: loadable(() => import("pages/Profile/Modules/ProfileDefault")),
			},
			ABOUT: {
				path: "about",
				component: loadable(() => import("pages/Profile/Modules/ProfileAbout")),
			},
			ASSETS: {
				path: "assets",
				component: loadable(() => import("pages/Profile/Modules/ProfileAssets")),
			},
		},
	},
	SETTING: {
		path: "settings",
		component: loadable(() => import("pages/SettingProfile"),fallbackPage),
	},
};

export default routes;