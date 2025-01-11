import { clsx } from "clsx";
import PropTypes from "prop-types";

export default function Keyboard(props) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function handleClick(letter) {
    props.setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyElements = alphabet.split("").map((letter) => {
    const className = clsx({
      correct:
        props.guessedLetters.includes(letter) &&
        props.currentWord.includes(letter),
      wrong:
        props.guessedLetters.includes(letter) &&
        !props.currentWord.includes(letter),
    });
    return (
      <button
        key={letter}
        className={className}
        onClick={() => {
          handleClick(letter);
        }}
        disabled={props.isGameOver}
        aria-disabled={props.guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
      >
        {letter}
      </button>
    );
  });

  return <section className="keyboard-section">{keyElements}</section>;
}

Keyboard.propTypes = {
  currentWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  setGuessedLetters: PropTypes.func.isRequired,
  isGameOver: PropTypes.bool.isRequired,
};
