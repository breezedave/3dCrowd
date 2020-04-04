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

        document.body.onresize = () => {
            self.resize();
        }

        this.mediaList = mediaList.sort((a,b) => a.seed - b.seed);
    }

    componentDidMount() {
        this.resize();
    }

    resize() {
        const {photoSize, gapSize} = this.props;
        const gallerySize = document.querySelector("#galleryHold") ? document.querySelector("#galleryHold").getBoundingClientRect(): {width:0, height:0};
        const cols = Math.floor(gallerySize.width / ((photoSize + gapSize)));
        const rows = Math.floor(gallerySize.height / ((photoSize + gapSize)));

        const viewerRenderWidth = Math.floor(gallerySize.width * 0.5 / (photoSize + gapSize)) * (photoSize + gapSize) - gapSize;
        const viewerRenderHeight = Math.floor(viewerRenderWidth * 0.75 / (photoSize + 10)) * (photoSize + gapSize) - gapSize;
        const viewerRenderSize = {
            viewerRenderWidth,
            viewerRenderHeight,
        };

        const viewerCols = Math.floor((viewerRenderWidth + gapSize) / ((photoSize + gapSize) * 2)) * 2;
        const viewerRows = Math.floor((viewerRenderHeight + gapSize) / ((photoSize + gapSize) * 2)) * 2;
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

        this.setState({
            gridTemplateCols,
            gridTemplateRows,
            cols,
            rows,
            gallerySize,
            viewerCols,
            viewerRows,
            viewerRenderSize,
            photoSlots,
        });
    }

    updateViewer = viewerPath => {
        this.setState({viewerPath});
    }

    render() {
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
            startImagesAt,
            viewerPath,
        } = this.state;

        const {
            photoSize,
            gapSize,
        } = this.props;

        const viewerColStart = Math.floor((cols - viewerCols)/2) + 1
        const viewerColEnd = viewerColStart + viewerCols;
        const viewerRowStart = Math.floor((rows - viewerRows)/2) + 1
        const viewerRowEnd = viewerRowStart + viewerRows;
        const photos = [];

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
            >
                {photos}
                <Viewer
                    className="viewer"
                    style={{
                        gridColumnStart: viewerColStart,
                        gridColumnEnd: viewerColEnd,
                        gridRowStart: viewerRowStart,
                        gridRowEnd: viewerRowEnd,
                    }}
                    viewerPath={viewerPath}
                />
            </GalleryStyled>
        );
    }
}

export default Gallery;
