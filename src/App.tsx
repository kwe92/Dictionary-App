import React from "react";
import { ThemeProvider } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";
import { AppContainer, AppContainerWrapper } from "./AppStyles";
import AppBar from "./components/appBar/AppBar";
import SearchBar from "./components/searchBar/SearchBar";
const theme = AppTheme;

const App = (props: {}) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainerWrapper>
        <AppContainer>
          <AppBar />
          <SearchBar />
          <h1>App</h1>;
        </AppContainer>
      </AppContainerWrapper>
    </ThemeProvider>
  );
};

export default App;
