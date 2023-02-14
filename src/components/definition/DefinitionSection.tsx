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

const DefinitionSection = (props: { wordObj: any }) => {
  console.log("FROM DEFINITION SECTION: ", props.wordObj);
  return (
    <MainContainer>
      <ListTile>
        <ListTileContentContainer>
          <ListTileTitle>{props.wordObj["word"]}</ListTileTitle>
          <ListTileBottom>{`/${props.wordObj["pronunciation"]}/`}</ListTileBottom>
        </ListTileContentContainer>

        <PlayButton src={images.play} />
      </ListTile>
    </MainContainer>
  );
};

export default DefinitionSection;
