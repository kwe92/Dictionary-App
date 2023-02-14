import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [word, setWord] = useState("Abyss");
  const endpint = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios.get(endpint).then((result) => {
      console.log("API Call Result", result);
    });
  });
  return { word, setWord };
};

export default useFetch;
