import React from "react";
import { images } from "../../constants/images";

import {
  ListTile,
  ListTileBottom,
  ListTileContentContainer,
  ListTileTitle,
  MainContainer,
  PlayButton,
} from "./DefinitionSectionStyles";

const DefinitionSection = (props: {}) => (
  <MainContainer>
    <ListTile>
      <ListTileContentContainer>
        <ListTileTitle>Daemon</ListTileTitle>
        <ListTileBottom>Dae*Mon</ListTileBottom>
      </ListTileContentContainer>

      <PlayButton src={images.play} />
    </ListTile>
  </MainContainer>
);

export default DefinitionSection;
