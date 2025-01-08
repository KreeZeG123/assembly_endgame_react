import { useEffect, useState } from "react";
import { languages } from "./assets/languages";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import Status from "./components/Status";
import Word from "./components/Word";

export default function App() {
  const [status, setStatus] = useState(null);

  const [currentWord, setCurrentWord] = useState("react");

  const [keys, setKeys] = useState(Array(26).fill(null));

  const wrongGuessCount = keys.reduce(
    (accumulator, key) => accumulator + (key === false ? 1 : 0),
    0
  );

  function gameWon() {
    const lettersFromWord = new Set(
      currentWord.split("").map((letter) => letter.toUpperCase())
    );

    for (const letter of lettersFromWord) {
      const idx = letter.charCodeAt(0) - "A".charCodeAt(0);
      if (keys[idx] === null || keys[idx] === false) {
        return false;
      }
    }
    return true;
  }

  const isGameWon = gameWon();
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  console.log("status : " + status);

  function convertStatus() {
    if (isGameWon) {
      setStatus("win");
    } else if (isGameLost) {
      setStatus("lose");
    } else if (wrongGuessCount !== 0) {
      setStatus("farewell");
    } else {
      setStatus(null);
    }
  }

  useEffect(() => {
    function convertStatus() {
      if (isGameWon) {
        setStatus("win");
      } else if (isGameLost) {
        setStatus("lose");
      } else if (wrongGuessCount !== 0) {
        setStatus("farewell");
      } else {
        setStatus(null);
      }
    }

    // Appel de la fonction pour mettre à jour le statut
    convertStatus();
  }, [keys, isGameWon, isGameLost, wrongGuessCount]);

  return (
    <>
      <Header />
      <Status status={status} wrongGuessCount={wrongGuessCount} />
      <Languages wrongGuessCount={wrongGuessCount} />
      <Word currentWord={currentWord} keys={keys} />
      <Keyboard currentWord={currentWord} keys={keys} setKeys={setKeys} />
      {isGameOver && <button id="new-game-btn">New Game</button>}
    </>
  );
}
