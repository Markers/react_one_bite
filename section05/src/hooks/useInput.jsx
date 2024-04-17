import { useState } from "react";
function useInput() {
  const [input, setInput] = useState("");

  const onchange = (e) => {
    setInput(e.target.value);
  };

  return [input, onchange];
}

export default useInput;
