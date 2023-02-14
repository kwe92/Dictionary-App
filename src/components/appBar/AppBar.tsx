import React, { MouseEventHandler, useState } from "react";
import { images } from "../../constants/images";
import {
  AppBarContainer,
  IconMoon,
  Logo,
  FontDropDownContainer,
  DropDownIcon,
  RightContentContainer,
  VerticalLine,
  DropDownContent,
  DropDownItem,
} from "./AppBarStyles";
import Switch from "./switch/Switch";

// TODO: Tag anonymous functions / callbacks with variable names

const AppBar = (props: {}) => {
  const [fontOption, setFontOption] = useState("Sans Serif");
  const [displayDropdown, SetdisplayDropdown] = useState("none");

  const dropdownController = () =>
    SetdisplayDropdown((prevState) => (prevState === "none" ? "auto" : "none"));

  const DropDownItems = () => (
    <DropDownContent display={displayDropdown}>
      <DropDownItem
        onClick={() => {
          setFontOption("Sans Serif");
        }}
      >
        Sans Serif
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          setFontOption("Serif");
        }}
      >
        Serif
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          setFontOption("Mon");
        }}
      >
        Mon
      </DropDownItem>
    </DropDownContent>
  );

  return (
    <AppBarContainer>
      {/* Logo */}
      <Logo src={images.logo} alt="logo.svg" />

      <RightContentContainer>
        {/* Drop Down */}
        <FontDropDownContainer onClick={dropdownController}>
          <p style={{ color: "black" }}>{fontOption}</p>
          <DropDownIcon src={images.arrowDown} alt="arrow-down.svg" />
          <DropDownItems />
        </FontDropDownContainer>

        <VerticalLine />

        {/* Switch */}
        <Switch />

        {/* Icon Moon */}
        <IconMoon src={images.moon} alt="moon.svg" />
      </RightContentContainer>
    </AppBarContainer>
  );
};

export default AppBar;
