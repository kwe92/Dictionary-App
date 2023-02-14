import React from "react";
import { ThemeProvider } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";
import { AppContainer, AppContainerWrapper, ErrorMessage } from "./AppStyles";
import AppBar from "./components/appBar/AppBar";
import SearchBar from "./components/searchBar/SearchBar";
import useIsEmpty from "./constants/hooks/useIsEmpty";
import DefinitionSection from "./components/definition/DefinitionSection";
const theme = AppTheme;

const App = (props: {}) => {
  const { emptyWord, setEmptyWord } = useIsEmpty();

  const setEmptyWordCallback = (state: boolean) => {
    setEmptyWord(state);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainerWrapper>
        <AppContainer>
          <AppBar />
          <SearchBar callback={setEmptyWordCallback} />
          {emptyWord && <ErrorMessage>Whoops, can't be empty...</ErrorMessage>}
          <DefinitionSection />
        </AppContainer>
      </AppContainerWrapper>
    </ThemeProvider>
  );
};

export default App;
