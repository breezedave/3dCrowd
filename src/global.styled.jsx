import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    html {
        background: #333842;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        margin: 2vh auto 0 auto;
        font-size: 3vh;
        color: #ddd;
        font-weight: 400;
    }

    p {
        font-size: 2vh;
        margin: .5vh;
        color: #ddd;
    }

    #root {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .instructions {
        max-height: 25vh;
        height: 25vh;
        padding-left: 5vw;
    }

    a,
    a:visited {
        text-decoration: none;
        color: #ddd;
        padding: 10px;
        border-radius: 6px;
        background: #333;
        border: 2px solid #ddd;
        margin: 3vh 0;
        text-align: center;
        display: block;
        width: 300px;
        box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
    }

`;

export default GlobalStyled;
