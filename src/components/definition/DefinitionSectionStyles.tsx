import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";

const MainContainer = styled(Column)`
  width: 100%;
  height: 100%;
  background: #d9e3da;
  padding-top: 3.625rem;
`;

const ListTile = styled(Row)`
  justify-content: space-between;
`;

const ListTileContentContainer = styled(Column)`
  width: 50%;
`;

const ListTileTitle = styled.h1``;
const ListTileBottom = styled.p``;

const PlayButton = styled.img``;

export {
  MainContainer,
  ListTile,
  ListTileContentContainer,
  ListTileTitle,
  ListTileBottom,
  PlayButton,
};
