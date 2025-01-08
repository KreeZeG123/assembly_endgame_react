import clsx from "clsx";
import { languages } from "../assets/languages";

export default function Languages(props) {
  const languageElements = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };

    const className = clsx({
      lost: index < props.wrongGuessCount,
    });
    return (
      <span key={lang.name} style={styles} className={className}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
}
