import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";

function AppRoutes() {
	const theme = useTheme();
  return (
    <Fragment>
			<Global styles={css`
				body {
					background : ${theme.colors.primaryLight}
				}
			`}/>
      <Route exact path={routes.HOME.path} component={routes.HOME.component} />
      <Route path={routes.PROFILE.path} component={routes.PROFILE.component} />
    </Fragment>
  );
}

export default AppRoutes;
