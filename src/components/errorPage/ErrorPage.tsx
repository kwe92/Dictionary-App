import React from "react";
import { images } from "../../constants/images";
import {
  ErrorBody,
  ErrorTittle,
  IconSadFace,
  MainContainer,
} from "./ErrorPageStyles";

export const ErrorPage = (props: { unknownWord: string }) => {
  return (
    <MainContainer>
      <IconSadFace src={images.sadFace} alt="sadface.png" />
      <ErrorTittle>{`No Definitions Found For: ${props.unknownWord}`}</ErrorTittle>
      <ErrorBody>{_errorMSG}</ErrorBody>
    </MainContainer>
  );
};

const _errorMSG =
  "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.";