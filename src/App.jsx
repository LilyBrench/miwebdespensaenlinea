
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
import Formulario from "./components/Formulario/Formulario";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Video />
      <Main />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;