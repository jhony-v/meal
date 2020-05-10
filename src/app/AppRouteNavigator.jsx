import React, { memo, Suspense } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Routes from "Routes";

function AppRouteNavigator() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p>cargando...</p>}>
                <Switch>
                    <Routes />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default memo(AppRouteNavigator);