import styled from "styled-components";
import "../media/images/imgIcon.svg";

const ViewerStyled = styled.div`
    border-radius: 8px;
    background: #282c34;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        background: transparent url("/assets/images/imgIcon.svg") no-repeat center;
        opacity: 0.2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100px;
        min-height: 100px;
    }

    img,
    video {
        position: absolute;
        top: 50%;
        left: 50%;
        width: auto;
        height: 100%;
        transform: translate(-50%, -50%);
    }

`;

export default ViewerStyled;
