import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const MainContainer = styled(Column)`
  width: 100%;
  height: 100%;
  // background: #d9e3da;
  padding-top: 3.625rem;
`;

const ListTile = styled(Row)`
  justify-content: space-between;
`;

const ListTileContentContainer = styled(Column)`
  width: 50%;
`;

const ListTileTitle = styled.h1`
  font-size: 4rem;

  @media screen and (max-width: 450px) {
    front-size: 2rem;
  }
`;
const ListTileBottom = styled.p`
  font-size: 1.5rem;
  font-size: 1.125rem;
`;

const PlayButton = styled.img``;

const POSContainer = styled(Row)`
  align-items: center;
  width: 100%;
  padding-top: 3.375rem;
  gap: 5%;
  // height: ;
  // justify-content: center;
`;

const HorizonalLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: ${({ theme }: { theme: ThemeInterface }) =>
    theme.lightColors.shade1};
`;

const DefinitionTittle = styled(Row)`
  width: 100%;
  align-items: center;
  padding-top: 3.125rem;
`;

const DefinitionListTile = styled(Row)`
  align-items: center;
  width: 100%;
`;

const DefinitionListTileContainer = styled(Column)`
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-left: 2rem;
`;

// const Dot = styled.div`
//   width: 0.375rem;
//   height: 0.375rem;
//   border-radius: 50%;
//   margin: 0rem 0rem 0rem 0rem;

//   background: ${({ theme }: { theme: ThemeInterface }) =>
//     theme.otherColors.purpleColor};
// `;

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
};
