import React, { useEffect, useState } from "react";
import { images } from "../../constants/images";

import {
  DefinitionListTile,
  DefinitionListTileContainer,
  DefinitionTittle,
  // Dot,
  HorizonalLine,
  ListTile,
  ListTileBottom,
  ListTileContentContainer,
  ListTileTitle,
  MainContainer,
  PlayButton,
  POSContainer,
} from "./DefinitionSectionStyles";

const DefinitionSection = (props: { wordObj: Array<WordInterface> }) => {
  const definitionList =
    props.wordObj.length > 0
      ? props.wordObj[0].definition.map((definition, index) => (
          <li key={index * 3.14}>{definition}</li>
        ))
      : [""];
  return (
    <MainContainer>
      <ListTile>
        <ListTileContentContainer>
          <ListTileTitle>
            {props.wordObj.length > 0 && props.wordObj[0]["word"]}
          </ListTileTitle>
          <ListTileBottom>
            {props.wordObj[0] && props.wordObj[0]["pronunciation"]
              ? `/${props.wordObj[0]["pronunciation"]}/`
              : ""}
          </ListTileBottom>
        </ListTileContentContainer>

        <PlayButton src={images.play} />
      </ListTile>
      <POSContainer>
        <p>{props.wordObj.length > 0 && props.wordObj[0]["partOfSpeach"]}</p>
        <HorizonalLine />
      </POSContainer>
      <DefinitionTittle>Meaning</DefinitionTittle>
      <DefinitionListTileContainer>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "1rem",
          }}
        >
          {definitionList}
        </ul>
      </DefinitionListTileContainer>
    </MainContainer>
  );
};

export default DefinitionSection;
