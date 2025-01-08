import { useState } from "react";

export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const [key, setKey] = useState(Array(26).fill(null));

  const keyElements = alphabet.split("").map((letter, index) => {
    const styleUnknown = {
      backgroundColor: "#FCBA29",
    };

    const styleTrue = {
      backgroundColor: "#10A95B",
    };

    const styleFalse = {
      backgroundColor: "#EC5D49",
    };

    function getBgColor(idx) {
      if (key[idx] === true) {
        return styleTrue;
      } else if (key[idx] == false) {
        return styleFalse;
      } else {
        return styleUnknown;
      }
    }

    return (
      <button key={letter.toUpperCase()} style={getBgColor(index)}>
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard-section">{keyElements}</section>;
}
