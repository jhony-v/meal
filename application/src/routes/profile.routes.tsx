import loadable from "@loadable/component";
import { fallbackPage } from "./fallbacks.routes";
import { MRoutes } from "./routes.types";

const PROFILE : MRoutes.RouterCreator = {
	PROFILE: {
	path: "/users/:idUser",
	component: loadable(() => import("pages/Profile"), fallbackPage),
	routes: {
		DEFAULT: {
			path: "/",
			component: loadable(() => import("pages/Profile/ProfileModules/ProfileDefault/ProfileDefaultScene")),
		},
		ABOUT: {
			path: "about",
			component: loadable(() => import("pages/Profile/ProfileModules/ProfileAbout/ProfileAboutScene")),
		},
		ASSETS: {
			path: "assets",
			component: loadable(() => import("pages/Profile/ProfileModules/ProfileAssets/ProfileAssetsScene")),
		},
	},
},
}

export default PROFILE;