import React from "react";
import { UILoadingPage } from "shared/styled/UILoading.styled";
import { MRoutes } from "./routes.types";
import PROFILE from "./profile.routes";
import HOME from "./home.routes";
import SETTING from "./setting.routes";

export const fallbackPage = {	fallback: <UILoadingPage />,};

const routes: MRoutes.RouterCreator = {
	...HOME,
	...PROFILE,
	...SETTING,
};

export default routes;
