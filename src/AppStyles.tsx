import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const AppContainerWrapper = styled(Column)`
  width: 100%;
  height: fit-content;
  margin-bottom: 5rem;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled(Column)`
  width: 60%;
  height: 100%;

  @media screen and (max-width: 1300px) {
    width: 88.5%;
  }
`;

const ErrorMessage = styled.p`
  padding-top: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }: { theme: ThemeInterface }) =>
    theme.otherColors.redColor};
`;
export { AppContainer, AppContainerWrapper, ErrorMessage };
