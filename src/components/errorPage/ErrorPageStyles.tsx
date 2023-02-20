import styled from "styled-components";
import { Column } from "../../styles/layout/Flex";

const MainContainer = styled(Column)`
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 26rem;
  //   background: lightgreen;
  margin-top: 5rem;

  @media screen and (max-width: 450px) {
    margin-top: 1.5rem;
  }
`;

const IconSadFace = styled.img`
  height: 10rem;
  width: 10rem;
`;

const ErrorTittle = styled.h1`
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
`;

const ErrorBody = styled.p`
  font-size: 1.125rem;
  text-align: center;
  color: ${({ theme }: { theme: ThemeInterface }) => theme.lightColors.shade0};
`;

// const IconImageContainer = styled.div``;

export { MainContainer, IconSadFace, ErrorBody, ErrorTittle };
