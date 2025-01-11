import clsx from "clsx";
import PropTypes from "prop-types";
import { languages } from "../assets/languages";

export default function Status(props) {
  function getFarewellText(language) {
    const options = [
      `Farewell, ${language}`,
      `Adios, ${language}`,
      `R.I.P., ${language}`,
      `We'll miss you, ${language}`,
      `Oh no, not ${language}!`,
      `${language} bites the dust`,
      `Gone but not forgotten, ${language}`,
      `The end of ${language} as we know it`,
      `Off into the sunset, ${language}`,
      `${language}, it's been real`,
      `${language}, your watch has ended`,
      `${language} has left the building`,
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function getStatus() {
    if (props.status === "farewell") {
      return (
        <h4>
          {"“" +
            getFarewellText(languages[props.wrongGuessCount - 1].name) +
            "” 👋"}
        </h4>
      );
    } else if (props.status === "win" || props.status === "lose") {
      return (
        <>
          <h3>{props.status == "win" ? "You win!" : "Game over!"}</h3>
          <p>
            {props.status == "win"
              ? "Well done! 🎉"
              : "You lose! Better start learning Assembly 😭"}
          </p>
        </>
      );
    } else {
      return null;
    }
  }

  const className = clsx({
    "game-status": true,
    farewell: props.status === "farewell",
    win: props.status === "win",
    lose: props.status === "lose",
  });

  return (
    <section aria-live="polite" role="status" className={className}>
      {getStatus()}
    </section>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
  wrongGuessCount: PropTypes.number.isRequired,
};
