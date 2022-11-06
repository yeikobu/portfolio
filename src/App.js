import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Knowledge from "./components/Knowledge";

function App() {
  return (
    <div className="App" >
      <div className="main-container">
        <Header />
        <About />
        <Portfolio />
        <Knowledge />
      </div>
      
    </div>
  );
}

export default App;
