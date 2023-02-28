import React, {
  FormEvent,
  MouseEvent,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
} from "react";
import useFetch from "../../constants/hooks/useFetch/useFetch";
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

type Event = FormEvent<HTMLFormElement> | MouseEvent<HTMLDivElement>;
type Ref = MutableRefObject<HTMLInputElement | null | undefined>;

const SearchBar = (props: { callback: Function; setWord: Function }) => {
  const [clear, setClear] = useState(false);
  const { emptyWord, setEmptyWord } = useIsEmpty();
  const wordRef: Ref = useRef();

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    const refResult = wordRef.current!.value;
    console.log("Event Object: ", event);
    console.log("Word Ref: ", refResult);

    if (!refResult) {
      setEmptyWord(true);
      props.callback(true);
      return;
    }
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
    <SearchBarContainer id="search-bar" emptyWord={emptyWord}>
      <StyledForm
        onSubmit={handleSubmit}
        onClick={() => {
          setClear(true);
        }}
      >
        <StyledInput
          placeholder="Search for any word..."
          ref={wordRef as RefObject<HTMLInputElement>}
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
