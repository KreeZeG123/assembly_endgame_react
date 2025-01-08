import { clsx } from "clsx";

export default function Keyboard(props) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const word = props.currentWord.split("").map((item) => item.toUpperCase());

  function letterIsValide(letter) {
    return word.includes(letter);
  }

  function handleClick(letter) {
    const idx = letter.charCodeAt(0) - "A".charCodeAt(0);
    props.setKeys((prevKey) => {
      return prevKey.map((key, index) => {
        return index === idx ? letterIsValide(letter) : key;
      });
    });
  }

  const keyElements = alphabet.split("").map((letter, index) => {
    const className = clsx({
      correct: props.keys[index] !== null && props.keys[index] === true,
      wrong: props.keys[index] !== null && props.keys[index] === false,
    });
    return (
      <button
        key={letter}
        className={className}
        onClick={() => {
          handleClick(letter);
        }}
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard-section">{keyElements}</section>;
}
