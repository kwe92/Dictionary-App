import React, { useState } from "react";
import { images } from "../../constants/images";
import {
  SearchBarContainer,
  SearchIcon,
  SearchIconContainer,
  StyledForm,
  StyledInput,
  ClearIconContainer,
  ClearIcon,
} from "./SearchBarStyles";

const SearchBar = (props: {}) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event: any) => {
    const input = event.target.value;
    console.log("USer Input: ", input);
    setUserInput(input);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setUserInput("");
  };

  const handleClear = () => {
    setUserInput("");
  };

  return (
    <SearchBarContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          placeholder="Search for any word..."
          value={userInput}
          onChange={handleUserInput}
        />
      </StyledForm>

      {userInput && (
        <ClearIconContainer onClick={handleClear}>
          <ClearIcon />
        </ClearIconContainer>
      )}
      <SearchIconContainer>
        <SearchIcon src={images.search} alt="seach.svg" />
      </SearchIconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
