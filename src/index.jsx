import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Gallery from "./Gallery/Gallery";
import GlobalStyling from "./global.styled";

window.photoSize = screen.availHeight * screen.availWidth < 400000? 40: 60;


ReactDOM.render(
    <Fragment>
        <GlobalStyling />
        <Gallery
            photoSize={window.photoSize}
            gapSize={6}
            minViewerWidth={6}
            minViewerHeight={3}
        />
    </Fragment>,
    document.getElementById("root")
);
