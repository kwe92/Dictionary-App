import React, { useEffect, useState } from "react";
import axios from "axios";

// TODO: Need a better way to parse object results

const useFetch = (userInput: string) => {
  const [word, setWord] = useState([]);
  const endpint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${userInput}?key=${process.env.REACT_APP_API_KEY}`;

  const fetchWord = async (userInput: string) => {
    const data = await axios.get(endpint);

    console.log("Data: ", data.data[0]["hwi"]["hw"]);
    console.log("Data: ", data.data);

    // const result = data.data;
    if (
      data.data[0]["hwi"]["hw"] === userInput.toLocaleLowerCase() ||
      (data.data[0]["meta"]["id"] === userInput.toLocaleLowerCase() &&
        data.data[0]["fl"] === "noun")
    ) {
      const wordObject = {
        word: userInput.toLowerCase(),
        pronunciation: data.data[0]["hwi"]["prs"][0]["mw"],
        partOfSpeach: data.data[0]["fl"],
        definition: data.data[0]["shortdef"],
      };
      setWord(wordObject as any);
    }
  };

  useEffect(() => {
    fetchWord(userInput);
  }, [userInput]);
  return { word, setWord };
};

export default useFetch;
