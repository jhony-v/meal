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
}

export default PROFILE;