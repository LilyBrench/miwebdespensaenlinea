
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Video from "./components/Video/Video";
import Gracias from "./components/Gracias/Gracias";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

function Inicio() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Video />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;