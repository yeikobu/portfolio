import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <About />
      </div>
      <Portfolio />
    </div>
  );
}

export default App;
