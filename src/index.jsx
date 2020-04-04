import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery/Gallery";
import GlobalStyling from "./global.styled";

ReactDOM.render(
    <Fragment>
        <GlobalStyling />
        <Gallery
            photoSize={60}
            gapSize={6}
        />
    </Fragment>,
    document.getElementById("root")
);
