import "./App.css";
import React, { useState } from 'react';
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Knowledge from "./components/Knowledge";
import ContactForm from "./components/ContactForm";

function App() {

  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div className="App" >
      <div className="main-container">
        <Header setModalToggle={setModalToggle} />
        <About />
        <Portfolio />
        <Knowledge />
      </div>
      { modalToggle === true && (<ContactForm setModalToggle={setModalToggle} />) }
    </div>
  );
}

export default App;
