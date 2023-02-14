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

// TODO Need to figure out how to make the HiX appear when the user types now

const SearchBar = (props: {}) => {
  const [clear, setClear] = useState(false);
  const { word, setWord } = useFetch();
  const [emptyWord, setEmptyWord] = useState(false);
  const wordRef: RefObj = useRef();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const refResult = wordRef.current!.value;
    console.log("Word Ref: ", refResult);

    if (!refResult) {
      console.log(" EMPTY WORD");
      setEmptyWord(true);
      return;
    }
    console.log("Event Object: ", event);
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
    <SearchBarContainer emptyWord={emptyWord}>
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
      <SearchIconContainer onClick={handleSubmit}>
        <SearchIcon src={images.search} alt="seach.svg" />
      </SearchIconContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
