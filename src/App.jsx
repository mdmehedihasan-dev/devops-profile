import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Exprience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header/>
    <Experience/>
    </>
  );
}

export default App;
