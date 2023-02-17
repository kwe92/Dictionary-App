import React, { MouseEventHandler, useEffect, useState } from "react";
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

// TODO: Tag anonymous functions / callbacks with variable names.

const AppBar = (props: { getFont: Function }) => {
  // const [fontOption, setFontOption] = useState("Sans Serif");
  // Fonts [Roboto Slab: (serif), Manrope (Sans Serif), Roboto Mono (Mono)]

  const [fontOption, setFontOption] = useState({
    typeface: "Sans Serif",
    font: "Manrope",
  });

  const [displayDropdown, SetdisplayDropdown] = useState("none");

  useEffect(() => {
    props.getFont(fontOption);
  }, [fontOption]);

  const dropdownController = () =>
    SetdisplayDropdown((prevState) => (prevState === "none" ? "auto" : "none"));

  const DropDownItems = () => (
    <DropDownContent display={displayDropdown}>
      <DropDownItem
        onClick={() => {
          setFontOption({
            typeface: "Sans Serif",
            font: "Manrope",
          });
        }}
      >
        Sans Serif
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          setFontOption({
            typeface: "Serif",
            font: "Roboto Slab",
          });
        }}
      >
        Serif
      </DropDownItem>
      <DropDownItem
        onClick={() => {
          setFontOption({
            typeface: "Mono",
            font: "Roboto Mono",
          });
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
          <p style={{ color: "black" }}>{fontOption.typeface}</p>
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
