import { languages } from "../assets/languages";

export default function Languages() {
  /**
   * Goal: Build out the main parts of our app
   *
   * Challenge: Create the language chips. Use the
   * `languages.js` file to pull in the array of
   * languages to use, which contains the language
   * name, background color, and text color.
   *
   * Hint for layout: use a flex container that can wrap
   * to layout the languages.
   */

  const languageElements = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    return (
      <span key={lang.name} style={styles}>
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageElements}</section>;
}
