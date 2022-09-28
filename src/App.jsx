import React, { useLayoutEffect } from "react";
import "./App.css";
import Main from "./Components/Main";
import About from "./Components/About";
import Good_At from "./Components/Good_At";

const scolling = (evt) => {
  const scrollContainer = document.querySelector("main");
  scrollContainer.scrollLeft += evt.deltaY;
};

function App() {
  return (
    <main className="w-[100vw] min-h-[100vh] overflow-x-hidden md:flex" onWheel={(e)=>scolling(e)}>
      <Main />
      <About />
      <Good_At />
    </main>
  );
}

export default App;
