import React, { lazy, Fragment } from "react";
import { Route } from "react-router-dom";


const Home = lazy(() => import("pages/Home"));

const Routes = () => (
    <Fragment>
        <Route exact path="/" component={Home} />
    </Fragment>
)

export default Routes;