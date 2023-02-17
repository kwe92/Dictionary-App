import styled, { createGlobalStyle } from "styled-components";

const AppGlobalTheme = createGlobalStyle<{ fontFamily: string }>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Fonts [Roboto Slab: (serif), Manrope (Sans Serif), Roboto Mono (Mono)]
    body {
        // TODO Font family should change dynamically
        // font-family: ${(props) => props.fontFamily};
        font-family: Manrope;

        background: white;
        color: 
    }

    li {
        line-style: none;
    }
    
`;

export default AppGlobalTheme;
