import { useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Exprience";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Header/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
