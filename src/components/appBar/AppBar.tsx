import React from "react";
import { images } from "../../constants/images";
import {
  AppBarContainer,
  IconMoon,
  Logo,
  FontDropDownContainer,
  DropDownIcon,
  RightContentContainer,
  VerticalLine,
} from "./AppBarStyles";
import Switch from "./switch/Switch";

const AppBar = (props: {}) => {
  return (
    <AppBarContainer>
      <Logo src={images.logo} alt="logo.svg" />

      <RightContentContainer>
        <FontDropDownContainer>
          <p style={{ color: "black" }}>Sans Serif</p>
          <DropDownIcon src={images.arrowDown} alt="arrow-down.svg" />
        </FontDropDownContainer>

        <VerticalLine />

        <Switch />
        <IconMoon src={images.moon} alt="moon.svg" />
      </RightContentContainer>
    </AppBarContainer>
  );
};

export default AppBar;
