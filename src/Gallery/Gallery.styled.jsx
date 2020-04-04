import styled from "styled-components";

const GalleryStyled = styled.div`
    display: grid;
    grid-gap: ${props => props.gapSize}px;
    grid-template-columns: ${props => props.gridTemplateCols};
    grid-template-rows: ${props => props.gridTemplateRows};
    width: 90vw;
    max-width: 90vw;
    max-height: 90vh;
    height: 90vh;
    margin: 10px auto;
}

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

`;

export default GalleryStyled;
