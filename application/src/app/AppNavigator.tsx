import React, { memo } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import HeaderToolbarMain from "shared/components/layouts/HeaderToolbarMain";

function AppNavigator() : JSX.Element{
  return (
    <BrowserRouter>
			<HeaderToolbarMain/>
        <Switch>
          <AppRoutes />
      	</Switch>
    </BrowserRouter>
  );
}

export default memo(AppNavigator);
