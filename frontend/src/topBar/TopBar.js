import { useState } from "react";
import "./TopBar.css";

function TopBar(props) {
  const [show, setShow] = useState(false);
  return (
    <nav className="topBar">
      <div className="leftTopBar">
        <img
          src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          alt=""
          className="leftBarImg"
        />
      </div>
      <div className="centralTopBar">
        <ul className="centralTopBarList">
          <l1
            className="centralTopBarListItem"
            onClick={() => props.handleNavigation("home")}
          >
            Home
          </l1>
          <l1
            className="centralTopBarListItem"
            onClick={() => props.handleNavigation("aboutUs")}
          >
            About Us
          </l1>
          <l1
            className="centralTopBarListItem"
            onClick={() => props.handleNavigation("services")}
          >
            Services
          </l1>
          <l1
            className="centralTopBarListItem"
            onClick={() => props.handleNavigation("contactUs")}
          >
            Contact
          </l1>
        </ul>
      </div>
      <div className="rightTopBar">
        <button
          onClick={() => props.handleNavigation("contactUs")}
          className="rightTopBarBtn"
        >
          SHEDULE SERVICES
        </button>
      </div>
      <div className="toggleMenu">
        <i
          onClick={() => setShow(!show)}
          className="showBtn fa-solid fa-bars"
        ></i>
      </div>
      {show ? (
        <div className="sideTopBar">
          <ul className="sideTopBarList">
            <l1
              className="centralTopBarListItem list"
              onClick={() => props.handleNavigation("home")}
            >
              Home
            </l1>
            <l1
              className="centralTopBarListItem list"
              onClick={() => props.handleNavigation("aboutUs")}
            >
              About Us
            </l1>
            <l1
              className="centralTopBarListItem list"
              onClick={() => props.handleNavigation("services")}
            >
              Services
            </l1>
            <l1
              className="centralTopBarListItem list"
              onClick={() => props.handleNavigation("contactUs")}
            >
              Contact
            </l1>
            <li className="centralTopBarListItems">
              <button
                onClick={() => props.handleNavigation("contactUs")}
                className="rightTopBarBtn"
              >
                SHEDULE SERVICES
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
}

export default TopBar;
