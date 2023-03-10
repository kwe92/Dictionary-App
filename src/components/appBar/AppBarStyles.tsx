import { display } from "@mui/system";
import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const AppBarContainer = styled(Row)`
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.625rem;
  @media screen and (max-width: 450px) {
    margin-top: 1.125rem;
  }
`;

const RightContentContainer = styled(Row)`
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 450px) {
    gap: 0;
  }
`;

const Logo = styled.img``;

const IconMoon = styled.img``;

const DropDownIcon = styled.img``;

interface Props {
  display: string;
}

const DropDownContent = styled(Column)<Props>`
  display: ${(props) => props.display};
  justify-content: space-evenly;
  width: 11.4375rem;
  height: 9.5rem;

  position: absolute;

  margin-top: 12.825rem;
  padding-left: 1.5rem;

  opacity: 0.85;

  cursor: pointer;

  border-radius: 0.825rem;

  z-index: 1;

  @media screen and (max-width: 450px) {
    width: 8.4375rem;
    padding-left: 1rem;
  }
`;

const FontDropDownContainer = styled(Row)`
  align-items: center;
  justify-content: end;

  height: 4rem;
  width: 7.5rem;

  position: relative;

  cursor: pointer;

  gap: 1.25rem;
  padding-right: 0.5rem;
`;

const VerticalLine = styled.div`
  width: 0.0625rem;
  height: 2rem;

  @media screen and (max-width: 450px) {
    margin: 0 0.375rem;
  }
`;

const DropDownItem = styled.p`
  width: 100%;
  padding: 0.675rem 0rem;
  &: hover {
    color: ${({ theme }: { theme: ThemeInterface }) =>
      theme.otherColors.purpleColor};
  }
`;

export {
  AppBarContainer,
  Logo,
  IconMoon,
  FontDropDownContainer,
  DropDownIcon,
  RightContentContainer,
  VerticalLine,
  DropDownContent,
  DropDownItem,
};
