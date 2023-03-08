import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { wordModel } from "../../models/WordModel";

// Example: https://media.merriam-webster.com/audio/prons/en/us/mp3/f/free0001.mp3
// https://media.merriam-webster.com/audio/prons/en/us/mp3/{first_letter_of_filename}/{file_name}.mp3
const initWord: WordInterface = {
  word: "",
  pronunciation: "",
  partOfSpeach: "",
  definition: [""],
  audio: "",
};

const useFetch = (
  userInput: string,
  setUserInput: Function,
  setError: Function
) => {
  const [word, setWord] = useState([initWord]);
  const [otherWords, setOtherWords] = useState([]);

  const endpint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${process.env.REACT_APP_API_KEY}`;

  let wordDefinitions: Array<WordInterface> = [];

  const fetchWord = async (userInput: string) => {
    if (!userInput) {
      setUserInput("keyboard");
    }
    const data = await axios.get(endpint);

    console.log("Data: ", data.data);

    console.log("Data All: ", data.data);
    console.log("Data type: ", typeof data.data);

    if (data.data === undefined) {
      console.log("undefined FOUND!");
      setError(true);
      setOtherWords([]);

      return;
    }
    if (Array.isArray(data.data) === true) {
      if (typeof data.data[0] === "string") {
        console.log("String ARRAY FOUND!");
        setOtherWords(data.data);
        setError(true);
        return;
      }
    }
    for (let i = 0; i < data.data.length; i++) {
      const searchedWord = userInput.replaceAll(" ", "").toLocaleLowerCase();
      const returnedWord = data.data[i]["hwi"]["hw"].replaceAll("*", "");

      if (searchedWord === returnedWord) {
        const wordObject = wordModel({
          word: userInput.toLowerCase(),
          pronunciation:
            data.data[i]["hwi"].hasOwnProperty("prs") &&
            data.data[i]["hwi"]["prs"][0]["mw"],
          partOfSpeach: data.data[i]["fl"],
          definition: data.data[i]["shortdef"],
          audio: data.data[i]["hwi"].hasOwnProperty("prs")
            ? `https://media.merriam-webster.com/audio/prons/en/us/mp3/${
                data.data[i]["hwi"]["prs"][0]["sound"]["audio"].split("")[0]
              }/${data.data[i]["hwi"]["prs"][0]["sound"]["audio"]}.mp3`
            : "",
        });

        wordDefinitions!.push(wordObject);
      }

      if (
        wordDefinitions.length === 0 &&
        data.data[i]["meta"].hasOwnProperty("stems")
      ) {
        const stemsArray = data.data[i]["meta"]["stems"];
        console.log("Stems: ", stemsArray.includes(searchedWord));
        if (stemsArray.includes(searchedWord)) {
          setUserInput(stemsArray[0]);
        }
      }
    }
    if (wordDefinitions.length === 0) {
      setError(true);
      setOtherWords([]);
      return;
    }
    setWord(wordDefinitions);
    setError(false);
  };

  useEffect(() => {
    fetchWord(userInput);
  }, [userInput]);

  console.log("wordDefinitions: ", wordDefinitions);

  return { word, setWord, otherWords };
};

export default useFetch;

// if (data.data === "Word is required.") {
//   console.log("Word is required. FOUND!");
//   wordDefinitions = [initWord];
//   setWord(wordDefinitions);
//   return;
// }
