import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

interface _ModeInterface {
  lightMode: boolean;
}
const MainContainer = styled(Column)<_ModeInterface>`
  width: 100%;
  height: 100%;
  // background: #d9e3da;
  padding-top: 3.625rem;

  @media screen and (max-width: 450px) {
    padding-top: 3.25rem;
  }
`;

const ListTile = styled(Row)`
  justify-content: space-between;
`;

const ListTileContentContainer = styled(Column)`
  width: 50%;
  gap: 1rem;
`;

const ListTileTitle = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

const ListTileBottom = styled.p`
  font-size: 1.5rem;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.img`
  @media screen and (max-width: 450px) {
    width: 4rem;
  }
`;

const POSContainer = styled(Row)`
  align-items: center;
  width: 100%;
  padding-top: 3.375rem;
  gap: 2.5%;
  font-size: 1.5rem;
  @media screen and (max-width: 450px) {
    padding-top: 2.75rem;
    font-size: 1.125rem;
  }
`;

const HorizonalLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.lightColors.shade0};
`;

const DefinitionTittle = styled(Row)`
  width: 100%;
  align-items: center;
  font-size: 1.25rem;
  padding-top: 3.125rem;

  color: ${({ theme }: { theme: ThemeInterface }) => theme.lightColors.shade0};

  @media screen and (max-width: 450px) {
    padding-top: 2.5rem;
    font-size: 1rem;
  }
`;

const DefinitionListTile = styled(Row)`
  align-items: center;
  width: 100%;
`;

const DefinitionListTileContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;

  list-style: none;

  li::before {
    content: "•";
    color: ${({ theme }: { theme: ThemeInterface }) =>
      theme.otherColors.purpleColor};
    display: inline-block;
    width: 1rem;
    margin-left: -1rem;
  }

  @media screen and (max-width: 450px) {
    margin-left: 0.75rem;
  }
`;

const StyledListItem = styled.li`
  font-size: 1.125rem;
  width: 100%;
  display: flex;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export {
  MainContainer,
  ListTile,
  ListTileContentContainer,
  ListTileTitle,
  ListTileBottom,
  PlayButton,
  POSContainer,
  HorizonalLine,
  DefinitionTittle,
  // Dot,
  DefinitionListTile,
  DefinitionListTileContainer,
  StyledListItem,
};

// const DefinitionListTileContainer = styled(Column)`
//   align-items: center;
//   gap: 1rem;
//   margin-top: 2rem;
//   margin-left: 2rem;
// `;

// const Dot = styled.div`
//   width: 0.375rem;
//   height: 0.375rem;
//   border-radius: 50%;
//   margin: 0rem 0rem 0rem 0rem;

//   background: ${({ theme }: { theme: ThemeInterface }) =>
//     theme.otherColors.purpleColor};
// `;
