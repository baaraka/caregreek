import "./TopBar.css";

function TopBar() {
  return (
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
