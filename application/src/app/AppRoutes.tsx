import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";

function AppRoutes(): JSX.Element {
	return (
		<Fragment>
			<Route exact path={routes.HOME.path} component={routes.HOME.component} />
			<Route path={routes.PROFILE.path} component={routes.PROFILE.component} />
			<Route path={routes.SETTING.path} component={routes.SETTING.component} />
		</Fragment>
	);
}
export default AppRoutes;
