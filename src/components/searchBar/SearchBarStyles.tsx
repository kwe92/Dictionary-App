import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";
import { HiX } from "react-icons/hi";

interface Props {
  emptyWord: boolean;
}

const SearchBarContainer = styled(Row)<Props>`
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  margin-top: 2.5rem;
  background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.lightColors.shade2};

  // &: focus-within {
  //   border: 1px solid
  //     ${({ theme }: { theme: ThemeInterface }) =>
    theme.otherColors.purpleColor};
  // }

  &: focus-within {
    border: 1px solid
      ${(props) =>
        props.emptyWord
          ? props.theme.otherColors.redColor
          : props.theme.otherColors.purpleColor};
  }

  border-radius: 0.75rem;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background: transparent;

  padding-left: 1.25rem;

  border-radius: inherit;

  font-size: 1.375rem;

  &: focus {
    border: none;
    outline: none;
  }

  @media screen and max-width: {
    font-size: 1.175rem;
  }
`;

const SearchIconContainer = styled(Row)`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 10%;
  // background: lightblue;

  border-radius: inherit;
`;

const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  @media screen and (max-width: 450px) {
    width: auto;
    height: auto;
  }
`;

const StyledForm = styled.form`
  height: 100%;
  width: 80%;

  border-radius: inherit;
  // background: red;
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

  color: ${({ theme }: { theme: ThemeInterface }) => theme.lightColors.shade0};
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
