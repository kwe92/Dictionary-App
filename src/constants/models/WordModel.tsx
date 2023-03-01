import React from "react";

export const wordModel = (props: WordInterface): WordInterface => {
  return {
    word: props.word,
    pronunciation: props.pronunciation,
    partOfSpeach: props.partOfSpeach,
    definition: props.definition,
    audio: props.audio,
  };
};
