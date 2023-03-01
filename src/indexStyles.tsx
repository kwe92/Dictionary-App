import styled, { createGlobalStyle } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";

const AppGlobalTheme = createGlobalStyle<{
  fontFamily: string;
  theme: ThemeInterface;
  lightMode: boolean;
}>`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Fonts [Roboto Slab: (serif), Manrope (Sans Serif), Roboto Mono (Mono)]

    body {
        font-family: ${(props) => props.fontFamily};
        background: ${(props) =>
          props.lightMode
            ? props.theme.lightColors.shade3
            : props.theme.darkColors.shade0};
        color: ${(props) =>
          props.lightMode
            ? props.theme.darkColors.shade0
            : props.theme.lightColors.shade3};
       
        #drop-down {
        background: ${(props) =>
          props.lightMode
            ? props.theme.lightColors.shade3
            : props.theme.darkColors.shade0};
        box-shadow: 0 0 1rem ${(props) =>
          props.lightMode
            ? props.theme.lightColors.shade1
            : props.theme.otherColors.purpleColor};

        }

        #search-bar{
            background: ${(props) =>
              props.lightMode
                ? props.theme.lightColors.shade2
                : props.theme.darkColors.shade1};
              
        }

        #icon-moon {
            color: orange;
        }

        svg{
            stroke:  ${(props) =>
              props.lightMode
                ? props.theme.lightColors.shade0
                : props.theme.otherColors.purpleColor};
        }

    }

    input{
        color: ${(props) =>
          props.lightMode
            ? props.theme.darkColors.shade0
            : props.theme.lightColors.shade3};
    }

    li {
        line-style: none;
    }

    #other-words-list-item {
      box-shadow: 0 0 1rem
  ${(props) =>
    props.lightMode
      ? props.theme.lightColors.shade1
      : props.theme.darkColors.shade1};
    }
    
`;

export default AppGlobalTheme;
