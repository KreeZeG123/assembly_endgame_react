import { languages } from "../assets/languages";

export default function Status(props) {
  function getStatus() {
    if (props.status === "farewell") {
      return (
        <h4>
          {"“Farewell " + languages[props.wrongGuessCount - 1].name + "” 👋"}
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

  function statusStyle() {
    if (props.status === "farewell") {
      return {
        backgroundColor: "#7A5EA7",
        border: "1px solid #323232",
        padding: "10px",
        color: "#fff",
      };
    } else if (props.status === "win") {
      return {
        backgroundColor: "#10A95B",
      };
    } else if (props.status === "lose") {
      return {
        backgroundColor: "#BA2A2A",
      };
    } else {
      return {};
    }
  }

  return (
    <section className="game-status" style={statusStyle()}>
      {getStatus()}
    </section>
  );
}
