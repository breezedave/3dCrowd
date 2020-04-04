import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Page from "./Page/Page";

ReactDOM.render(
    <Fragment>
        <Page
            photoSize={80}
            gapSize={4} 
        />
    </Fragment>,
    document.getElementById("root")
);
