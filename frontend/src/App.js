import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import TopBar from "./topBar/TopBar";
import Why from "./why/Why";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Why />
    </div>
  );
}

export default App;
