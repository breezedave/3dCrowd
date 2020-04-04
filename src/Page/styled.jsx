import styled from "styled-components";

const PageStyled = styled.div`
    display: grid;
    grid-gap: ${props => props.gapSize}px;
    grid-template-columns: ${props => props.gridTemplateCols};
    grid-template-rows: ${props => props.gridTemplateRows};
    width: 90vw;
    max-width: 90vw;
    max-height: 90vh;
    height: 90vh;
    border: 1px solid black;
}

.photo {
    width: ${props => props.photoSize}px;
    height: ${props => props.photoSize}px;
    border-radius: 20px;
    background: pink;
}

.viewer {
    width: ${props => props.viewerSize? props.viewerSize.viewerRenderWidth: 0}px;
    height: ${props => props.viewerSize? props.viewerSize.viewerRenderHeight: 0}px;
    border-radius: 20px;
    background: blue;
}

`;

export default PageStyled;
