import React, { lazy, Fragment } from "react";
import { Route } from "react-router-dom";

const Home = lazy(() => import("pages/Home"));

export default function () {
    return (
        <Fragment>
            <Route exact path="/" component={Home} />
        </Fragment>
    );
}
