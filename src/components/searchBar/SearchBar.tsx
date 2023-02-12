import React, { useRef, useState } from "react";
import useFetch from "../../constants/hooks/useFetch";
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

// TODO Need to figure out how to mat the HiX appear when the user types now

const SearchBar = (props: {}) => {
  const [clear, setClear] = useState(false);
  const { word, setWord } = useFetch();

  const wordRef: RefObj = useRef();

  const handleSubmit = (event: any) => {
    const refResult = wordRef.current!.value;
    event.preventDefault();
    console.log("Submitted Word: ");
    console.log("Word Ref: ", refResult);
    wordRef.current!.value = "";
    setWord(refResult);
    setClear(false);
  };

  const handleClear = () => {
    wordRef.current!.value = "";
    setClear(false);
  };

  return (
    <SearchBarContainer>
      <StyledForm
        onSubmit={handleSubmit}
        onClick={() => {
          setClear(true);
        }}
      >
        <StyledInput
          placeholder="Search for any word..."
          // value={userInput}
          ref={wordRef as unknown as any}
        />
      </StyledForm>

      {clear && (
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
