import styled from "styled-components";

const PhotoStyled = styled.div`
    border-radius: 8px;
    background: #282c34;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    .image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 150%;
        height: 150%;
        transform: translate(-50%, -50%);
        background: rgb(10,10,10);
        opacity: 0.4;
    }

    .mouseOver {
        width: 100%;
        height: 100%;
        opacity: 1;
    }

`;

export default PhotoStyled;
