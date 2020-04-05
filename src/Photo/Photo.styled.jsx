import styled from "styled-components";
import "../media/images/vidIcon.svg";

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

    &.isVideo {
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 75%;
            height: 75%;
            background: transparent url("assets/images/vidIcon.svg") no-repeat center;
            background-size: 75% 75%;
            transform: translate(-50%, -50%);
            color: white;
        }
    }

`;

export default PhotoStyled;
