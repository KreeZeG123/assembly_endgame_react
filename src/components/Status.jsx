import { useState } from "react";

export default function Status() {
  const [status, setStatus] = useState("win");

  function getStatus() {
    if (status === "farewell") {
      return <h4>“Farewell HTML & CSS” 👋 </h4>;
    } else if (status === "win" || status === "lose") {
      return (
        <>
          <h3>{status == "win" ? "You win!" : "Game over!"}</h3>
          <p>
            {status == "win"
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
    if (status === "farewell") {
      return {
        backgroundColor: "#7A5EA7",
        border: "1px solid #323232",
        padding: "10px",
        color: "#fff",
      };
    } else if (status === "win") {
      return {
        backgroundColor: "#10A95B",
      };
    } else if (status === "lose") {
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
