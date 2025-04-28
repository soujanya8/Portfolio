import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Souji } from "./components/Souji/Souji";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Souji />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
