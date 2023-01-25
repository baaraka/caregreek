import "./TopBar.css";

function TopBar() {
  return (
    <nav className="topBar">
      <div className="leftTopBar">
        <h1 className="leftHeading">CareGreek</h1>
      </div>
      <div className="centralTopBar">
        <ul className="centralTopBarList">
          <l1 className="centralTopBarListItem">Home</l1>
          <l1 className="centralTopBarListItem">About Us</l1>
          <l1 className="centralTopBarListItem">Services</l1>
          <l1 className="centralTopBarListItem">Contact</l1>
        </ul>
      </div>
      <div className="rightTopBar">
        <button className="rightTopBarBtn">SHEDULE SERVICES</button>
      </div>
    </nav>
  );
}

export default TopBar;
