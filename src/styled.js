import styled, { createGlobalStyle } from "styled-components";
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

export const Text = styled.span`
        display: inline-block;
        font-style: italic;
        text-align: center;
        width: 100%;
    
`;

export const theme = {
    colors: {
        white: '#FFFFFF',
        teal: '#008080',
        hoverTeal: 'hsl(180, 100%, 30%)',
        crimson: '#DC143C',
        grey: '#808080',
    }
};