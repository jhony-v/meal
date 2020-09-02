import loadable from "@loadable/component";
import { MRoutes } from "./routes.types";
import { fallbackPage } from "./fallbacks.routes";

const HOME : MRoutes.RouterCreator = {
	HOME: {
		path: "/",
		component: loadable(() => import("pages/Home"), fallbackPage),
		routes : {
			SEARCH: {
				path: "/search",
			},
		}
	},
}

export default HOME;