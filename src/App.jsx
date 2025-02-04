import styles from "./app.module.css"

import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Jobs from "./components/Jobs/Jobs"
import Projetos from "./components/Projetos/Projetos"
import Contact from "./components/Contact/Contact"

function App() {

  return (

    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Jobs />
      <Projetos />
      <Contact />
    </div>

  )

}

export default App
