import React from "react";
import { ThemeProvider } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";
import { AppContainer, AppContainerWrapper } from "./AppStyles";

const theme = AppTheme;

const App = (props: {}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainerWrapper>
        <AppContainer>
          <h1>App</h1>;
        </AppContainer>
      </AppContainerWrapper>
    </ThemeProvider>
  );
};

export default App;
