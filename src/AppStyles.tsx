import styled from "styled-components";
import { Column } from "./styles/layout/Flex";

const AppContainerWrapper = styled(Column)`
  width: 100%;
  height: 100vh;
  background: #0fa2a9;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled(Column)`
  width: 60%;
  height: 100%;
  background: #7d3865;
`;

export { AppContainer, AppContainerWrapper };
