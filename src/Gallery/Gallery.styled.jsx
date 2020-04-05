import styled from "styled-components";
import "../media/images/prev.svg";

const GalleryStyled = styled.div`
    position: relative;
    display: grid;
    grid-gap: ${props => props.gapSize}px;
    grid-template-columns: ${props => props.gridTemplateCols};
    grid-template-rows: ${props => props.gridTemplateRows};
    width: ${props => props.maxWidth}px;
    max-width: 90vw;
    max-height: 70vh;
    height: 70vh;
    margin: 10px auto;

    .photo {
        width: ${props => props.photoSize}px;
        height: ${props => props.photoSize}px;
    }

    .viewer {
        width: ${props => props.viewerSize? props.viewerSize.viewerRenderWidth: 0}px;
        height: ${props => props.viewerSize? props.viewerSize.viewerRenderHeight: 0}px;
        border-radius: 8px;
        background: #282c34;
    }

    .prev,
    .next {
        position: absolute;
        min-height: 20%;
        min-width: 5vw;
        top: 50%;
        border: none;
        background: transparent url("assets/images/prev.svg") no-repeat center;
        background-size: 5vw 5vw;
        cursor: pointer;
    }

    .prev {
        left: 0;
        transform: translate(-5vw, -50%);

    }

    .next {
        right: 0;
        transform: translate(5vw, -50%) scale(-1, 1);
    }

`;

export default GalleryStyled;
