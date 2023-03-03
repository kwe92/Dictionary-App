import React, { useEffect, useState } from "react";
import { images } from "../../constants/images";
import {
  AppBarContainer,
  // IconMoon,
  Logo,
  FontDropDownContainer,
  DropDownIcon,
  RightContentContainer,
  VerticalLine,
  DropDownContent,
  DropDownItem,
} from "./AppBarStyles";
import Switch from "./switch/Switch";

interface Props {
  getFont: Function;
  setMode: Function;
}

const initStateFont = {
  typeface: "Sans Serif",
  font: "Manrope",
};

const AppBar = (props: Props) => {
  const [fontOption, setFontOption] = useState(initStateFont);
  const [displayDropdown, SetdisplayDropdown] = useState("none");

  useEffect(() => {
    props.getFont(fontOption);
  }, [fontOption]);

  const dropdownController = () =>
    SetdisplayDropdown((prevState) => (prevState === "none" ? "auto" : "none"));

  const handleMode = () => {
    props.setMode((prevState: boolean) => !prevState);
  };

  return (
    <AppBarContainer>
      {/* Logo */}
      <Logo src={images.logo} alt="logo.svg" />

      <RightContentContainer>
        {/* Drop Down */}
        <FontDropDownContainer onClick={dropdownController}>
          <p>{fontOption.typeface}</p>
          <DropDownIcon src={images.arrowDown} alt="arrow-down.svg" />
          <DropDownItems
            displayDropdown={displayDropdown}
            setFontOption={setFontOption}
          />
        </FontDropDownContainer>

        <VerticalLine id="vertical-line" />

        {/* Switch */}
        <Switch onClick={handleMode} />

        {/* Icon Moon */}
        <IconMoon />
        <IconSun />
      </RightContentContainer>
    </AppBarContainer>
  );
};

// Hosited Variables and Functions

const DropDownItems = (props: {
  displayDropdown: string;
  setFontOption: Function;
}) => (
  <DropDownContent id="drop-down" display={props.displayDropdown}>
    <DropDownItem
      onClick={() => {
        props.setFontOption({
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
        props.setFontOption({
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
        props.setFontOption({
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

const IconMoon = (props: {}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    id="icon-moon"
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
);

const IconSun = (props: {}) => (
  <img id="icon-sun" src={images.sun} style={{ width: "2.375rem" }}></img>
);

export default AppBar;
