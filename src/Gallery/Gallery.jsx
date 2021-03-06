import React, { Component, Fragment } from "react";
import GalleryStyled from "./Gallery.styled";
import Photo from "../Photo/Photo";
import Viewer from "../Viewer/Viewer";
import mediaList from "../mediaList/mediaList";

class Gallery extends Component {
    state = {
        startImagesAt: 0,
    };

    constructor(props) {
        super(props);

        const self = this;


        this.mediaList = mediaList.sort((a,b) => a.seed - b.seed);
    }

    next = () => {
        const {photoSlots} = this.getSize();
        this.setState({startImagesAt: this.state.startImagesAt + photoSlots});
    }

    prev = () => {
        const {photoSlots} = this.getSize();
        const imageI = this.state.startImagesAt - photoSlots < 0 ? 1000 - photoSlots : this.state.startImagesAt - photoSlots;
        this.setState({startImagesAt: imageI});
    }

    getSize() {
        const {photoSize, gapSize, minViewerWidth, minViewerHeight} = this.props;
        const gallerySize = document.querySelector("#galleryHold") ? document.querySelector("#galleryHold").getBoundingClientRect(): {width:0, height:0};
        const cols = Math.floor(gallerySize.width / ((photoSize + gapSize)));
        const rows = Math.floor(gallerySize.height / ((photoSize + gapSize)));

        const viewerRenderWidth = cols <= minViewerWidth ? (cols * (photoSize + gapSize)) - gapSize: Math.max((minViewerWidth * (photoSize + gapSize)), Math.floor(gallerySize.width * 0.5 / (photoSize + gapSize)) * (photoSize + gapSize) - gapSize);
        const viewerRenderHeight = rows <= minViewerHeight ? (rows * (photoSize + gapSize)) - gapSize: Math.max((minViewerHeight * (photoSize + gapSize)) - gapSize, Math.floor(viewerRenderWidth * 0.67 / (photoSize + 10)) * (photoSize + gapSize) - gapSize);
        const viewerRenderSize = {
            viewerRenderWidth,
            viewerRenderHeight,
        };

        const viewerCols = cols <= minViewerWidth ? cols: Math.max(minViewerWidth, Math.floor((viewerRenderWidth + gapSize) / ((photoSize + gapSize) * 2)) * 2);
        const viewerRows = rows <= minViewerHeight ? rows: Math.max(minViewerHeight, Math.floor((viewerRenderHeight + gapSize) / ((photoSize + gapSize) * 2)) * 2);
        const slots = cols * rows;
        const viewerSlots = viewerCols * viewerRows;
        const photoSlots = slots - viewerSlots;


        let gridTemplateCols = "";
        let gridTemplateRows = "";

        for(let i = 0; i < cols; i++) {
            gridTemplateCols += ` ${photoSize}px`;
        }

        for(let i = 0; i < rows; i++) {
            gridTemplateRows += ` ${photoSize}px`;
        }

        return {
            gridTemplateCols,
            gridTemplateRows,
            cols,
            rows,
            gallerySize,
            viewerCols,
            viewerRows,
            viewerRenderSize,
            photoSlots,
        };
    }

    updateViewer = viewerPath => {
        this.setState({viewerPath});
    }

    render() {
        const {
            startImagesAt,
            viewerPath,
        } = this.state;

        const {
            maxWidth,
            photoSize,
            gapSize,
        } = this.props;

        const {
            gridTemplateCols,
            gridTemplateRows,
            cols,
            rows,
            gallerySize,
            viewerCols,
            viewerRows,
            viewerRenderSize,
            photoSlots,
        } = this.getSize();

        const viewerColStart = Math.floor((cols - viewerCols)/2) + 1
        const viewerColEnd = viewerColStart + viewerCols;
        const viewerRowStart = Math.floor((rows - viewerRows)/2) + 1
        const viewerRowEnd = viewerRowStart + viewerRows;
        const photos = [];
        const self = this;

        for(let i = 0; i < photoSlots; i++) {
            const myMedia = (startImagesAt+i) % this.mediaList.length;

            photos.push(
                <Photo
                    tabIndex="0"
                    key={`photo${i}`}
                    myMedia={this.mediaList[myMedia]}
                    className="photo"
                    updateViewer={this.updateViewer}
                />
            )
        }

        return (
            <GalleryStyled
                id="galleryHold"
                gridTemplateCols={gridTemplateCols}
                gridTemplateRows={gridTemplateRows}
                viewerSize={viewerRenderSize}
                photoSize={photoSize}
                gapSize={gapSize}
                maxWidth={maxWidth}
            >
                {photos}
                <Viewer
                    tabIndex="0"
                    className="viewer"
                    style={{
                        gridColumnStart: viewerColStart,
                        gridColumnEnd: viewerColEnd,
                        gridRowStart: viewerRowStart,
                        gridRowEnd: viewerRowEnd,
                    }}
                    viewerPath={viewerPath}
                />
                <button className="prev" type="button" onClick={self.prev}></button>
                <button className="next" type="button" onClick={self.next}></button>
            </GalleryStyled>
        );
    }
}

export default Gallery;
