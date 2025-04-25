import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Souji } from './components/Navbar/Souji/Souji';

function App() {
 

  return (
    <div className={styles.App}>
      <Navbar />
      <Souji />
    </div>
      
  )
}

export default App
