import loadable from "@loadable/component";
import { fallbackPage } from "./fallbacks.routes";
import { MRoutes } from "./routes.types";

const SETTING : MRoutes.RouterCreator = {
	SETTING: {
		path: "/settings",
		component: loadable(() => import("pages/SettingProfile"),fallbackPage),
		routes : {
			DEFAULT : {
				path : "/"
			},
			ACCOUNT : {
				path : "account",
			}	,
			THEME : {
				path : "theme",
			},
		}
	},
}

export default SETTING;