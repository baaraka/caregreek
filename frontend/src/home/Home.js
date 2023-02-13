import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <div className="homeTitle">
        <h1 className="homeHeading">
          <span className="careGreek">Caregreek</span>{" "}
          <span className="homeHeadings">
            We Are A Certified Cleaning Company
          </span>
        </h1>
        <button
          onClick={() => props.handleNavigation("contactUs")}
          className="homeBtn"
        >
          SHEDULE SERVICES
        </button>
      </div>
      <div className="homeLeft">
        <div className="homeDash2">
          <ul className="homeList">
            <li className="homeListItem2">............</li>
            <li className="homeListItem2">............</li>
          </ul>
        </div>
        <div className="homeImage">
          <img
            src="https://images.unsplash.com/photo-1610141160723-d2d346e73766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xlYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="homeImageItem"
          />
        </div>
        <div className="homeDash1">
          <ul className="homeList">
            <li className="homeListItem1">..........</li>
            <li className="homeListItem1">..........</li>
            <li className="homeListItem1">..........</li>
            <li className="homeListItem1">..........</li>
            <li className="homeListItem1">..........</li>
          </ul>
        </div>
        <div className="homeDivDiv">
          <div className="homeDiv">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRndgu79RSU3uhUL66gWyM-YDP9HCYjfU6ZYB62Vhelb0Ln3MO1XPoPm7QRcDIuQvTm9Tk&usqp=CAU"
              alt=""
              className="homeImg"
            />
          </div>
          <div className="homeImgE">
            <h6 className="homeImgHeading">Sam Odion</h6>
            <span className="star fa fa-star checked"></span>
            <span className="star fa fa-star checked"></span>
            <span className="star fa fa-star checked"></span>
            <span className="star fa fa-star checked"></span>
            <p className="homeImgParagraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="homeDash3">
          <ul className="homeList">
            <li className="homeListItem3">...</li>
          </ul>
        </div>
        <div className="triangle"></div>
        <div className="circle"></div>
        <span className="starLarge fa fa-star checked"></span>
      </div>
    </div>
  );
}

export default Home;
