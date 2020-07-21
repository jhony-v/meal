import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";

function AppRoutes() {
  return (
    <Fragment>
      <Route exact path={routes.HOME.path} component={routes.HOME.component} />
      <Route exact path={routes.PROFILE.path} component={routes.PROFILE.component} />
    </Fragment>
  );
}

export default AppRoutes;
