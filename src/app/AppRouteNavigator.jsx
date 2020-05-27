import React, { memo, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from "routes";
import { UILoadingPage } from 'shared/styled/UILoading';

function AppRouteNavigator() {
    return (
        <BrowserRouter>
            <Suspense fallback={<UILoadingPage/>}>
                <Switch>
                    <Routes />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default memo(AppRouteNavigator);