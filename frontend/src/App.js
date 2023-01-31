import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import Services from "./services/Services";
import Team from "./team/Team";
import TopBar from "./topBar/TopBar";
import Why from "./why/Why";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Home />
      <About />
      <Why />
      <Services />
      <Team />
    </div>
  );
}

export default App;
