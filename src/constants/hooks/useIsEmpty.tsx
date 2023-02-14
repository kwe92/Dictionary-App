import React, { useState } from "react";

const useIsEmpty = () => {
  const [emptyWord, setEmptyWord]: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ] = useState(false);

  return { emptyWord: emptyWord, setEmptyWord: setEmptyWord };
};

export default useIsEmpty;
