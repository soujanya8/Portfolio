import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Souji } from "./components/Souji/Souji";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Souji />
      <About />
    </div>
  );
}

export default App;
