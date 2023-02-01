import "./Help.css";

function Help() {
  return (
    <div className="help">
      <div className="helpTitleDiv">
        <div className="helpTitle">
          <h3 className="helpHeading">Let's Help You With Your Cleaning</h3>
          <h3 className="helpHeading">Cleaning</h3>
          <p className="helpParagraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            itaque dicta doloribus delectus quo commodi quis molestiae possimus
            sunt eum nostrum, architecto quod illum, quam voluptates ab ipsum
            beatae reprehenderit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. In, quos tempora repellendus optio deleniti
            quidem, assumenda vitae distinctio debitis autem at perspiciatis
            dolore sapiente quam dolores! Possimus, rerum consequuntur?
            Doloremque!
          </p>
        </div>
        <div className="helpDots">
          <ul className="helpList">
            <li className="helpListItem">................</li>
            <li className="helpListItem">................</li>
            <li className="helpListItem">................</li>
            <li className="helpListItem">................</li>
            <li className="helpListItem">................</li>
          </ul>
        </div>
      </div>
      <div className="helpDivForm">
        <div className="helpFormHeading">
          <h4 className="helpHeadingForm">Book Now</h4>
        </div>
        <div className="helpForm">
          <form className="helpFormItem">
            <label className="helpLabel">
              <span className="helpSpan">name</span>
              <input type="text" name="Name" className="helpInput" />
            </label>
            <label className="helpLabel">
              <span className="helpSpan">Phone number</span>
              <input type="tel" name="Telephone" className="helpInput" />
            </label>
            <label className="helpLabel">
              <span className="helpSpan">Email</span>
              <input type="email" name="Email" className="helpInput" />
            </label>
            <label className="helpLabel">
              <span className="helpSpan">Location</span>
              <input type="text" name="Location" className="helpInput" />
            </label>
            <button className="helpBtn">SHEDULE SERVICES</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Help;
