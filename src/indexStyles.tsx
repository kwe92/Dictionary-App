import styled, { createGlobalStyle } from "styled-components";

const AppGlobalTheme = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        // TODO Font family should change dynamically
        // font-family: ;
        background: white;
    }

    li {
        line-style: none;
    }
    
`;

export default AppGlobalTheme;
