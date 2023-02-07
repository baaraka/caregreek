import "./Why.css";

function Why() {
  return (
    <div className="why">
      <div className="whyTitle">
        <h3 className="whyHeading">Why caregreek</h3>
        <div className="whySpanDivDiv">
          <div className="whySpanDiv">
            <span className="whyIconSpan">
              <i className="whyIcon fa-solid fa-check"></i>
            </span>
            <p className="whyParagraph">
              a superior clean through our trained staff and on-site supervision
              to ensure accountability each and every time;
            </p>
          </div>

          <div className="whySpanDiv">
            <span className="whyIconSpan">
              <i className="whyIcon fa-solid fa-check"></i>
            </span>
            <p className="whyParagraph">
              a local operations team on-call 24 hours a day, available to work
              at a moment's notice; and
            </p>
          </div>
          <div className="whySpanDiv">
            <span className="whyIconSpan">
              <i className="whyIcon fa-solid fa-check"></i>
            </span>
            <p className="whyParagraph">
              a safe “green” clean with the use of environmentally friendly
              products, vacuums and microfiber dusting cloths.
            </p>
          </div>
        </div>
      </div>
      <div className="whyVideoBody">
        <img
          src="http://caregreek.com/static/media/why.289624b0393b4aece11d.png"
          alt=""
          className="whyVideo"
        />
      </div>
    </div>
  );
}

export default Why;
