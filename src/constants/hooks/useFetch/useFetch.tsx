import React, { useEffect, useState } from "react";
import axios from "axios";
import { wordModel } from "../../models/WordModel";

// TODO: Get the plural of a word and return the word definition

const useFetch = (userInput: string) => {
  const initWord: WordInterface = {
    word: "",
    pronunciation: "",
    partOfSpeach: "",
    definition: [""],
  };
  const [word, setWord] = useState([initWord]);

  const endpint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${process.env.REACT_APP_API_KEY}`;

  let wordDefinitions: Array<WordInterface> = [];

  const fetchWord = async (userInput: string) => {
    const data = await axios.get(endpint);

    console.log("Data: ", data.data);

    console.log("Data All: ", data.data);

    for (let i = 0; i < data.data.length; i++) {
      if (
        data.data[i]["hwi"]["hw"].replaceAll("*", "") ===
        userInput.toLocaleLowerCase()
      ) {
        const wordObject = wordModel({
          word: userInput.toLowerCase(),
          pronunciation:
            data.data[i]["hwi"].hasOwnProperty("prs") &&
            data.data[i]["hwi"]["prs"][0]["mw"],
          partOfSpeach: data.data[i]["fl"],
          definition: data.data[i]["shortdef"],
        });

        wordDefinitions.push(wordObject);
      }
    }

    setWord(wordDefinitions);
  };

  useEffect(() => {
    fetchWord(userInput);
  }, [userInput]);

  console.log("wordDefinitions: ", wordDefinitions);

  return { word, setWord };
};

export default useFetch;

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

// data.data[i]["meta"]["id"] === userInput.toLocaleLowerCase()
