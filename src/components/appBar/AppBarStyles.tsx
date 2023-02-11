import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

const AppBarContainer = styled(Row)`
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  background: lightblue;
`;

const RightContentContainer = styled(Row)`
  align-items: center;
`;

const Logo = styled.img``;

const IconMoon = styled.img``;

const DropDownIcon = styled.img``;

const FontDropDownContainer = styled(Row)`
  align-items: center;
  background: lightgreen;
`;

const VerticalLine = styled.div`
  width: 0.0625rem;
  height: 2rem;
  background: red;
`;

export {
  AppBarContainer,
  Logo,
  IconMoon,
  FontDropDownContainer,
  DropDownIcon,
  RightContentContainer,
  VerticalLine,
};
