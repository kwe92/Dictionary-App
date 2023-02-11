import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";

const AppBarContainer = styled(Row)`
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  background: lightblue;
  margin-top: 3.625rem;
`;

const RightContentContainer = styled(Row)`
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img``;

const IconMoon = styled.img``;

const DropDownIcon = styled.img``;

const FontDropDownContainer = styled(Row)`
  align-items: center;
  background: lightgreen;
  gap: 1.25rem;
  padding-right: 0.5rem;
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
