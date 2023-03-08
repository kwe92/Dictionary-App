import React from "react";
import { images } from "../../constants/images";
import {
  ErrorBody,
  ErrorTittle,
  IconGuide,
  MainContainer,
  StyledLI,
  StyledUL,
} from "./ErrorPageStyles";

import styled from "styled-components";

export const ErrorPage = (props: {
  unknownWord: string;
  setUserInput: Function;
  otherWords: string[];
}) => {
  const otherWordsListItem = props.otherWords.map((word, index) => (
    <StyledLI
      key={index * 3.14}
      onClick={() => {
        props.setUserInput(word);
      }}
      id="other-words-list-item"
    >
      {word}
    </StyledLI>
  ));
  return (
    <React.Fragment>
      <MainContainer>
        <IconGuide id="icon-guide" src={images.guide} alt="guide.png" />
        <ErrorTittle>{`No Definitions Found For: ${props.unknownWord}`}</ErrorTittle>
        <ErrorBody>{errorMSG}</ErrorBody>
      </MainContainer>
      <StyledUL>{otherWordsListItem}</StyledUL>
    </React.Fragment>
  );
};
const errorMSG =
  "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.";
