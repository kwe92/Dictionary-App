import styled from "styled-components";
import { Column } from "../../styles/layout/Flex";

const MainContainer = styled(Column)`
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin-top: 5rem;
  gap: 1.75rem;
  padding-bottom: 3.75rem;

  @media screen and (max-width: 450px) {
    margin-top: 2.125rem;
    padding-bottom: 2.75rem;
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

const StyledLI = styled.li`
  padding: 1rem 2rem;

  border-radius: 1rem;
  cursor: pointer;
  font-size: 1.125rem;
  text-align: center;

  @media screen and (min-width: 1024px) {
    padding: 1.125rem 2.3125rem;
  }

  @media screen and (min-width: 1300x) {
  }
`;

const StyledUL = styled.ul`
  display: grid;

  grid-template-columns: auto auto;

  grid-row-gap: 1.75rem;

  list-style-type: none;

  row-gap: 1.3125rem;

  column-gap: 1.5rem;

  @media screen and (min-width: 750px) {
    grid-template-columns: auto auto auto;
    column-gap: 1.5rem;
  }

  // @media screen and (min-width: 1200px) {
  //   grid-template-columns: auto auto auto auto auto auto auto;
  //   row-gap: 1.75rem;
  // }

  @media screen and (min-width: 1300x) {
    grid-template-columns: auto auto auto auto auto auto auto auto auto;
  }
`;

// const IconImageContainer = styled.div``;

export {
  MainContainer,
  IconSadFace,
  ErrorBody,
  ErrorTittle,
  StyledLI,
  StyledUL,
};
