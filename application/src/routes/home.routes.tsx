import loadable from "@loadable/component";
import { fallbackPage } from "routes";
import { MRoutes } from "./routes.types";

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