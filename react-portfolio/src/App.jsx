import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Souji } from "./components/Souji/Souji";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Souji />
      <About />
      <Experience />
    </div>
  );
}

export default App;
