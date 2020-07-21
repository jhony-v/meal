import React, { memo, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { UILoadingPage } from "shared/styled/UILoading";
import AppRoutes from "./AppRoutes";

function AppNavigator() {
  return (
    <BrowserRouter>
      <Suspense fallback={<UILoadingPage />}>
        <Switch>
          <AppRoutes />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default memo(AppNavigator);
