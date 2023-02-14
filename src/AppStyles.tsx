import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const AppContainerWrapper = styled(Column)`
  width: 100%;
  height: 150vh;
  // background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.lightColors.shade3};
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled(Column)`
  width: 60%;
  height: 100%;
  // background: #7d3865;

  @media screen and (max-width: 1300px) {
    width: 88.5%;
  }
`;

export { AppContainer, AppContainerWrapper };
