import styled from "styled-components";

const ViewerStyled = styled.div`
    border-radius: 8px;
    background: #282c34;
    position: relative;
    overflow: hidden;

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
