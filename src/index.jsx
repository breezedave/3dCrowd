import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import GlobalStyling from "./global.styled";
import Page from "./Page/Page";

ReactDOM.render(
    <Fragment>
        <GlobalStyling />
        <Page />
    </Fragment>,
    document.getElementById("root")
);
