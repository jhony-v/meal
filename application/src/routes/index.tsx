import { MRoutes } from "./routes.types";
import PROFILE from "./profile.routes";
import HOME from "./home.routes";
import SETTING from "./setting.routes";

const routes: MRoutes.RouterCreator = {
	...HOME,
	...PROFILE,
	...SETTING,
};

export default routes;
