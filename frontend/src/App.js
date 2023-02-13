import { useState } from "react";
import Footer from "./footer/Footer";
import TopBar from "./topBar/TopBar";
import About from "./about/About";
import AboutUs from "./aboutUs/AboutUs";
import Contact from "./contact/Contact";
import Gallery from "./gallery/Gallery";
import Help from "./help/Help";
import Home from "./home/Home";
import Questions from "./questions/Questions";
import Says from "./says/Says";
import Service from "./service/Service";
import Services from "./services/Services";
import Team from "./team/Team";
import Why from "./why/Why";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <TopBar handleNavigation={handleNavigation} />
      {currentPage === "home" && (
        <div>
          <Home handleNavigation={handleNavigation} />
          <About handleNavigation={handleNavigation} />
          <Why />
          <Services handleNavigation={handleNavigation} />
          <Team />
          <Gallery />
          <Help />
          <Says />
          <Questions />
        </div>
      )}
      {currentPage === "aboutUs" && <AboutUs />}
      {currentPage === "services" && <Service />}
      {currentPage === "contactUs" && <Contact />}
      <Footer handleNavigation={handleNavigation} />
    </div>
  );
}

export default App;
