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

const AppBar = (props: { getFont: Function; setMode: Function }) => {
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
    <DropDownContent id="drop-down" display={displayDropdown}>
      <DropDownItem
        onClick={() => {
          setFontOption({
            typeface: "Sans Serif",
            font: "Manrope",
          });
        }}
        style={{ fontFamily: "Manrope" }}
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
        style={{ fontFamily: "Roboto Slab" }}
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
        style={{ fontFamily: "Roboto Mono" }}
      >
        Mono
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
          <p>{fontOption.typeface}</p>
          <DropDownIcon src={images.arrowDown} alt="arrow-down.svg" />
          <DropDownItems />
        </FontDropDownContainer>

        <VerticalLine />

        {/* Switch */}
        <Switch
          onClick={() => {
            props.setMode((prevState: boolean) => !prevState);
          }}
        />

        {/* Icon Moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            // stroke="#838383"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
        {/* <IconMoon id="icon-moon" src={images.moon} alt="moon.svg" /> */}
      </RightContentContainer>
    </AppBarContainer>
  );
};

export default AppBar;
