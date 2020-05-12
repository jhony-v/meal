import React, { memo, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from "routes";

function AppRouteNavigator() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>Loading files...</p>}>
                <Switch>
                    <Routes />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default memo(AppRouteNavigator);