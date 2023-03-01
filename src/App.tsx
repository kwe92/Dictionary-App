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

const App = (props: {}) => {
  const theme = AppTheme;
  const { emptyWord, setEmptyWord } = useIsEmpty();
  const [noDef, setNoDef] = useState(false);
  const [userInput, setUserInput] = useState("");
  const { word, otherWords } = useFetch(userInput, setUserInput, setNoDef);
  const [font, setFont] = useState({
    typeface: "",
    font: "",
  });

  console.log("Other Word Choices:", otherWords);
  const [mode, setMode] = useState(true);

  const setEmptyWordCallback = (state: boolean) => {
    setEmptyWord(state);
  };

  function fontCallback(font: FontInterface): void {
    setFont(font);
  }

  console.log("FROM DEFINITION APP: ", word);
  console.log("FROM DEFINITION APP Length: ", word.length);

  return (
    <>
      <AppGlobalTheme fontFamily={font.font} theme={theme} lightMode={mode} />
      <ThemeProvider theme={theme}>
        <AppContainerWrapper>
          <AppContainer>
            <AppBar getFont={fontCallback} setMode={setMode} />
            <SearchBar callback={setEmptyWordCallback} setWord={setUserInput} />
            {emptyWord && (
              <ErrorMessage>Whoops, can't be empty...</ErrorMessage>
            )}
            {!noDef && <DefinitionSectionEle word={word} />}
            {noDef && (
              <ErrorPage
                unknownWord={userInput}
                setUserInput={setUserInput}
                otherWords={otherWords}
              />
            )}
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
  return <DefinitionSection wordArray={props.word} />;
};
