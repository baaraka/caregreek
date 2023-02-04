import "./Contact.css";

function Contact() {
  return (
    <div>
      <div className="homeAboutUs">
        <div className="homeAboutUsTitle">
          <h3 className="homeAboutUsHeading">Contact Us</h3>
        </div>
        <div className="homeAboutUsListDiv">
          <ul className="homeAboutUsList">
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
            <li className="homeAboutUsListItem">............</li>
          </ul>
        </div>
      </div>
      <div className="contact">
        <div className="contactDivDiv">
          <div className="contactDiv">
            <div className="contactTitle">
              <h3 className="contactHeading">Get In Touch</h3>
            </div>
            <div className="contactForm">
              <form className="contactFormDiv">
                <label className="contactLabel">
                  <span className="contactSpanLabel">Name</span>
                  <input type="text" name="Name" className="contactInput" />
                </label>
                <label className="contactLabel">
                  <span className="contactSpanLabel">Email</span>
                  <input type="email" name="Email" className="contactInput" />
                </label>
                <label className="contactLabel">
                  <span className="contactSpanLabel">Message</span>
                  <input
                    type="text"
                    name="Message"
                    className="contactInput contactMessage"
                  />
                </label>
                <button className="contactBtn">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="contactInformation">
            <div className="contactInformationHeading">
              <h4 className="contactInformationHeadingItem">
                Contact Information
              </h4>
            </div>
            <div className="contactInformationDiv">
              <p className="paragraphInformation">
                <span className="informationSpan">
                  <i className="informationIcon fa-solid fa-location-dot"></i>
                  Address: Caregreek Complex, Alexis Hotel, Jabi Abuja.
                </span>
                <br />
                <span className="informationSpan">
                  <i className="informationIcon fa-sharp fa-solid fa-phone-volume"></i>
                  Email: info@caregreek.com
                </span>
                <br />
                <span className="informationSpan">
                  <i className="informationIcon fa-solid fa-envelope"></i>
                  Call:+234 902 066 4276 OR +234 807 769 3387
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="contactImage">
          <img
            src="http://caregreek.com/static/media/contact1.d39184fc0142dd2cc4fb.png"
            alt=""
            className="contactImageItem"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
