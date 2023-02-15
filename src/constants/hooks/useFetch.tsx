import React, { useEffect, useState } from "react";
import axios from "axios";

// TODO: Need a better way to parse object results

const useFetch = (userInput: string) => {
  const [word, setWord] = useState([]);
  const partsOfSpeech = [
    "noun",
    "pronoun",
    "verb",
    "adjective",
    "adverb",
    "preposition",
    "conjunction",
    "interjection",
  ];
  const endpint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${process.env.REACT_APP_API_KEY}`;
  let wordPOS: any = [];

  const fetchWord = async (userInput: string) => {
    const data = await axios.get(endpint);

    console.log("Data: ", data.data[0]["hwi"]["hw"]);
    console.log("Data All: ", data.data);

    // const result = data.data;

    for (let i = 0; i < partsOfSpeech.length; i++) {
      if (
        data.data[0]["hwi"]["hw"].replace("*", "") ===
          userInput.toLocaleLowerCase() ||
        (data.data[0]["meta"]["id"] === userInput.toLocaleLowerCase() &&
          data.data[0]["fl"] === partsOfSpeech[i])
      ) {
        const wordObject = {
          word: userInput.toLowerCase(),
          pronunciation: data.data[i]["hwi"]["prs"][i]["mw"],
          partOfSpeach: data.data[i]["fl"],
          definition: data.data[i]["shortdef"],
        };

        wordPOS.push(wordObject);
      }
    }
    // setWord(wordObject as any);

    // if (
    //   data.data[0]["hwi"]["hw"] === userInput.toLocaleLowerCase() ||
    //   (data.data[0]["meta"]["id"] === userInput.toLocaleLowerCase() &&
    //     data.data[0]["fl"] === "noun")
    // ) {
    //   const wordObject = {
    //     word: userInput.toLowerCase(),
    //     pronunciation: data.data[0]["hwi"]["prs"][0]["mw"],
    //     partOfSpeach: data.data[0]["fl"],
    //     definition: data.data[0]["shortdef"],
    //   };
    //   setWord(wordObject as any);
    // }
  };

  useEffect(() => {
    fetchWord(userInput);
  }, [userInput]);
  return { wordPOS, setWord };
};

export default useFetch;
