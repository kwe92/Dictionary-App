import React, { useRef, useState } from "react";
import useFetch from "../../constants/hooks/useFetch";
import useIsEmpty from "../../constants/hooks/useIsEmpty";
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

const SearchBar = (props: { callback: Function; setWord: Function }) => {
  const [clear, setClear] = useState(false);
  // const { word, setWord } = useFetch();
  const { emptyWord, setEmptyWord } = useIsEmpty();
  const wordRef: RefObj = useRef();

  // document.getElementById("root")?.addEventListener("click", () => {
  //   console.log("I HAVE BEEN TOUCHED!");
  // });

  // document.getElementById("root")?.removeEventListener("click", () => {
  //   console.log("I HAVE BEEN TOUCHED!");
  // });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const refResult = wordRef.current!.value;
    console.log("Word Ref: ", refResult);

    if (!refResult) {
      console.log(" EMPTY WORD");
      setEmptyWord(true);
      props.callback(true);
      return;
    }
    console.log("Event Object: ", event);
    console.log("Submitted Word: ");
    console.log("Word Ref: ", refResult);
    wordRef.current!.value = "";
    setEmptyWord(false);
    props.callback(false);
    props.setWord(refResult);
    setClear(false);
  };

  const handleClear = () => {
    wordRef.current!.value = "";
    setClear(false);
    setEmptyWord(false);
    props.callback(false);
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
