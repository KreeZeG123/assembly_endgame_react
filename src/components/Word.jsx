import clsx from "clsx";
import PropTypes from "prop-types";

export default function Word(props) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const shouldRevealLetter =
      props.isGameLost || props.guessedLetters.includes(letter);
    const letterClassName = clsx({
      "missed-letter":
        props.isGameLost && !props.guessedLetters.includes(letter),
    });
    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word-section">{letterElements}</section>;
}

Word.propTypes = {
  currentWord: PropTypes.string.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  isGameLost: PropTypes.array.isRequired,
};
