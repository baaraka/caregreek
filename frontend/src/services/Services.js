import "./Services.css";

function Services(props) {
  return (
    <div className="services">
      <div className="servicesTitle">
        <h3 className="servicesHeading">Our Services</h3>
      </div>
      <div className="serviceBody">
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
        <div className="divHeadingBody">
          <div className="servicesIconDiv">
            <span className="serviceBbn">
              <i className="sIcon fa-solid fa-thumbs-up"></i>
            </span>
          </div>
          <div className="servicesBodyHeading">
            <h4 className="servicesBodyHeadingItem">Residential Cleaning</h4>
            <p className="servicesParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quasi exercitationem. Odio perferendis minus, saepe, dolores neque
              voluptates eaque amet impedit dignissimos dolorum molestiae,
              aliquam excepturi itaque ratione a earum.
            </p>
          </div>
        </div>
      </div>
      <div className="serviceButton">
        <button
          onClick={() => props.handleNavigation("services")}
          className="servicesBtn"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default Services;
