import React, { useEffect, useState } from "react";
import { images } from "../../constants/images";
import AppTheme from "../../styles/theme/AppTheme";

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
  StyledListItem,
} from "./DefinitionSectionStyles";

const DefinitionSection = (props: { wordArray: Array<WordInterface> }) => {
  const DefinitionList =
    props.wordArray.length > 0
      ? props.wordArray.map((word, index) => {
          const definitionList = props.wordArray[index].definition.map(
            (definition, index) => (
              <StyledListItem key={index * 3.14}>
                <p
                  style={{
                    paddingLeft: "0.75rem",
                  }}
                >
                  {definition}
                </p>
              </StyledListItem>
            )
          );

          return (
            <React.Fragment key={index * 3.15}>
              <POSContainer>
                <p>{word["partOfSpeach"]}</p>
                <HorizonalLine />
              </POSContainer>
              <DefinitionTittle>Meaning</DefinitionTittle>
              <DefinitionListTileContainer>
                {definitionList}
              </DefinitionListTileContainer>
            </React.Fragment>
          );
        })
      : null;

  return (
    <MainContainer>
      <ListTile>
        <ListTileContentContainer>
          <ListTileTitle>
            {props.wordArray.length > 0 && props.wordArray[0]["word"]}
          </ListTileTitle>
          <ListTileBottom style={{ color: AppTheme.otherColors.purpleColor }}>
            {props.wordArray[0] && props.wordArray[0]["pronunciation"]
              ? `/${props.wordArray[0]["pronunciation"]}/`
              : ""}
          </ListTileBottom>
        </ListTileContentContainer>

        <PlayButton
          src={images.play}
          onClick={() => {
            const audio = new Audio(props.wordArray[0].audio);
            audio.play();
          }}
        />
      </ListTile>
      {DefinitionList}
    </MainContainer>
  );
};

export default DefinitionSection;
