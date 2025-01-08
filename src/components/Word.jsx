export default function Word(props) {
  const letterElements = props.currentWord.split("").map((letter, index) => {
    const idx = letter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0);

    return (
      <span key={index}>
        {props.keys[idx] !== null &&
          props.keys[idx] === true &&
          letter.toUpperCase()}
      </span>
    );
  });

  return <section className="word-section">{letterElements}</section>;
}
