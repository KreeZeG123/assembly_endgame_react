import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { languages } from "./assets/languages.js";
import { words } from "./assets/word.js";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import Status from "./components/Status";
import Word from "./components/Word";

export default function App() {
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].toUpperCase();
  }

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

  const [guessedLetters, setGuessedLetters] = useState([]);

  const [status, setStatus] = useState(null);

  const numGuesses = languages.length - 1;
  const wrongGuessCount = guessedLetters.reduce((acc, letter) => {
    return acc + (currentWord.includes(letter) ? 0 : 1);
  }, 0);
  const numGuessesLeft = numGuesses - wrongGuessCount;

  const isGameWon = [...new Set(currentWord)].every((letter) =>
    guessedLetters.includes(letter)
  );
  const isGameLost = wrongGuessCount >= numGuesses;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    guessedLetters.length > 0 && !currentWord.includes(lastGuessedLetter);

  useEffect(() => {
    if (isGameWon) {
      setStatus("win");
    } else if (isGameLost) {
      setStatus("lose");
    } else if (isLastGuessIncorrect) {
      setStatus("farewell");
    } else {
      setStatus(null);
    }
  }, [guessedLetters, isGameWon, isGameLost, isLastGuessIncorrect]);

  function newGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <Status
        status={status}
        wrongGuessCount={wrongGuessCount}
        currentWord={currentWord}
      />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word.`
            : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {currentWord
            .split("")
            .map((letter) =>
              guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <button id="new-game-btn" onClick={newGame}>
          New Game
        </button>
      )}
    </>
  );
}
