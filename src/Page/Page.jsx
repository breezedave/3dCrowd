import React, { Component, Fragment } from "react";
import PageStyled from "./styled";

class Page extends Component {
    state = {};

    constructor(props) {
        super(props);

        const self = this;

        document.body.onresize = () => {
            self.resize();
        }
    }

    componentDidMount() {
        this.resize();
    }

    resize() {
        const {photoSize, gapSize} = this.props;
        const pageSize = document.querySelector("#pageHold").getBoundingClientRect();
        const cols = Math.floor(pageSize.width / ((photoSize + gapSize)));
        const rows = Math.floor(pageSize.height / ((photoSize + gapSize)));

        const viewerRenderWidth = Math.floor(pageSize.width * 0.5 / (photoSize + gapSize)) * (photoSize + gapSize) - gapSize;
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
            pageSize,
            viewerCols,
            viewerRows,
            viewerRenderSize,
            photoSlots,
        });
    }

    render() {
        const {
            gridTemplateCols,
            gridTemplateRows,
            cols,
            rows,
            pageSize,
            viewerCols,
            viewerRows,
            viewerRenderSize,
            photoSlots,
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
            photos.push(<div key={`photo${i}`} className="photo"></div>)
        }

        return (
            <PageStyled
                id="pageHold"
                gridTemplateCols={gridTemplateCols}
                gridTemplateRows={gridTemplateRows}
                viewerSize={viewerRenderSize}
                photoSize={photoSize}
                gapSize={gapSize}
            >
                {photos}
                <div className="viewer" style={{
                    gridColumnStart: viewerColStart,
                    gridColumnEnd: viewerColEnd,
                    gridRowStart: viewerRowStart,
                    gridRowEnd: viewerRowEnd,
                }}></div>
            </PageStyled>
        );
    }
}

export default Page;
