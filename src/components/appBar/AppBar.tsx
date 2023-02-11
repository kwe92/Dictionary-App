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

  const dropdownController = () => {
    SetdisplayDropdown((prevState) => (prevState === "none" ? "auto" : "none"));
  };

  return (
    <AppBarContainer>
      <Logo src={images.logo} alt="logo.svg" />

      <RightContentContainer>
        <FontDropDownContainer onClick={dropdownController}>
          <p style={{ color: "black" }}>{fontOption}</p>
          <DropDownIcon src={images.arrowDown} alt="arrow-down.svg" />
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
        </FontDropDownContainer>

        <VerticalLine />

        <Switch />
        <IconMoon src={images.moon} alt="moon.svg" />
      </RightContentContainer>
    </AppBarContainer>
  );
};

export default AppBar;
