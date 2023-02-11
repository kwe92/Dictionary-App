import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";
import { HiX } from "react-icons/hi";

const SearchBarContainer = styled(Row)`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  margin-top: 2.5rem;
  background: #eed7a1;

  border-radius: 0.75rem;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  // background: transparent;

  padding-left: 1.25rem;

  border-radius: inherit;

  font-size: 1.375rem;

  &: focus {
    border: none;
    // outline: none;
  }
`;

const SearchIconContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  background: lightblue;

  border-radius: inherit;
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledForm = styled.form`
  height: 100%;
  width: 80%;

  border-radius: inherit;
  background: red;
`;

const ClearIconContainer = styled(Row)`
  height: 100%;
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const ClearIcon = styled(HiX)`
  width: 60%;
  height: 60%;
`;

export {
  SearchBarContainer,
  StyledInput,
  SearchIconContainer,
  SearchIcon,
  StyledForm,
  ClearIconContainer,
  ClearIcon,
};
