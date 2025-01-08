import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import Languages from "./components/Languages";
import Status from "./components/Status";
import Word from "./components/Word";

export default function App() {
  return (
    <>
      <Header />
      <Status />
      <Languages />
      <Word />
      <Keyboard />
    </>
  );
}
