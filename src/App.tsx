import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import AppTheme from "./styles/theme/AppTheme";
import { AppContainer, AppContainerWrapper, ErrorMessage } from "./AppStyles";
import AppBar from "./components/appBar/AppBar";
import SearchBar from "./components/searchBar/SearchBar";
import useIsEmpty from "./constants/hooks/useIsEmpty";
import DefinitionSection from "./components/definition/DefinitionSection";
import useFetch from "./constants/hooks/useFetch/useFetch";
import AppGlobalTheme from "./indexStyles";
import { ErrorPage } from "./components/errorPage/ErrorPage";
const theme = AppTheme;

const App = (props: {}) => {
  const { emptyWord, setEmptyWord } = useIsEmpty();
  const [noDef, setNoDef] = useState(false);
  const [userInput, setUserInput] = useState("");
  const { word, setWord } = useFetch(userInput, setNoDef);
  const [font, setFont] = useState({
    typeface: "",
    font: "",
  });

  const setEmptyWordCallback = (state: boolean) => {
    setEmptyWord(state);
  };

  function fontCallback(font: FontInterface): void {
    // console.log("FROM fontCallback: ", font);
    setFont(font);
  }

  console.log("FROM DEFINITION APP: ", word);
  console.log("FROM DEFINITION APP Length: ", word.length);

  return (
    <>
      <AppGlobalTheme fontFamily={font.font} />
      <ThemeProvider theme={theme}>
        <AppContainerWrapper>
          <AppContainer>
            <AppBar getFont={fontCallback} />
            <SearchBar callback={setEmptyWordCallback} setWord={setUserInput} />
            {emptyWord && (
              <ErrorMessage>Whoops, can't be empty...</ErrorMessage>
            )}
            <DefinitionSectionEle word={word} />
            {noDef && <ErrorPage unknownWord={userInput} />}
          </AppContainer>
        </AppContainerWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;

const DefinitionSectionEle = (props: { word: WordInterface[] }) => {
  if (props.word[0] === undefined) {
    return <></>;
  }
  if (props.word[0].word === "") {
    return <></>;
  }
  return <DefinitionSection wordObj={props.word} />;
};
