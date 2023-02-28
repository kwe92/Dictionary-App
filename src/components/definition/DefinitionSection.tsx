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

const DefinitionSection = (props: { wordObj: Array<WordInterface> }) => {
  const isLightMode = false;
  const DefinitionList =
    props.wordObj.length > 0
      ? props.wordObj.map((word, index) => {
          const definitionList = props.wordObj[index].definition.map(
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
                <p
                // style={{
                //   fontSize: "1.5rem",
                // }}
                >
                  {word["partOfSpeach"]}
                </p>
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
    <MainContainer lightMode={isLightMode}>
      <ListTile>
        <ListTileContentContainer>
          <ListTileTitle>
            {props.wordObj.length > 0 && props.wordObj[0]["word"]}
          </ListTileTitle>
          <ListTileBottom style={{ color: AppTheme.otherColors.purpleColor }}>
            {props.wordObj[0] && props.wordObj[0]["pronunciation"]
              ? `/${props.wordObj[0]["pronunciation"]}/`
              : ""}
          </ListTileBottom>
        </ListTileContentContainer>

        <PlayButton src={images.play} />
      </ListTile>
      {DefinitionList}
    </MainContainer>
  );
};

export default DefinitionSection;

{
  /* <POSContainer>
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
      </DefinitionListTileContainer> */
}
