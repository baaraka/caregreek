import { useState } from "react";
import About from "../about/About";
import AboutUs from "../aboutUs/AboutUs";
import Contact from "../contact/Contact";
import Gallery from "../gallery/Gallery";
import Help from "../help/Help";
import Home from "../home/Home";
import Questions from "../questions/Questions";
import Says from "../says/Says";
import Service from "../service/Service";
import Services from "../services/Services";
import Team from "../team/Team";
import Why from "../why/Why";

import "./TopBar.css";

function TopBar() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav className="topBar">
        <div className="leftTopBar">
          <img
            src="http://caregreek.com/static/media/logo.597684787fc988fd5ffb.png"
            alt=""
            className="leftBarImg"
          />
        </div>
        <div className="centralTopBar">
          <ul className="centralTopBarList">
            <l1
              className="centralTopBarListItem"
              onClick={() => handleNavigation("home")}
            >
              Home
            </l1>
            <l1
              className="centralTopBarListItem"
              onClick={() => handleNavigation("aboutUs")}
            >
              About Us
            </l1>
            <l1
              className="centralTopBarListItem"
              onClick={() => handleNavigation("services")}
            >
              Services
            </l1>
            <l1
              className="centralTopBarListItem"
              onClick={() => handleNavigation("contactUs")}
            >
              Contact
            </l1>
          </ul>
        </div>
        <div className="rightTopBar">
          <button className="rightTopBarBtn">SHEDULE SERVICES</button>
        </div>
      </nav>
      {currentPage === "home" && (
        <div>
          <Home />
          <About />
          <Why />
          <Services />
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
    </div>
  );
}

export default TopBar;
