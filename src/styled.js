import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    .body {
        margin: auto;
        max-width: 750px;
        font-family: "Lato", sans-serif;
        background-image: url("${background}");
        font-size: 20px;
        font-weight: 700;
    }
`;