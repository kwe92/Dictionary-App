import styled, { createGlobalStyle } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";

const AppGlobalTheme = createGlobalStyle<{
  fontFamily: string;
  theme: ThemeInterface;
}>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Fonts [Roboto Slab: (serif), Manrope (Sans Serif), Roboto Mono (Mono)]
    body {
        font-family: ${(props) => props.fontFamily};
        // background: ${(props) => props.theme.darkColors.shade0};
        background: ${(props) => props.theme.lightColors.shade3};

    }

    li {
        line-style: none;
    }
    
`;

export default AppGlobalTheme;
