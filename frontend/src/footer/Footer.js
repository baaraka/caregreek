import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerLeft">
          <div className="footerLeftImage">
            <img
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt=""
              className="footerImgLeft"
            />
          </div>
          <div className="footerLeftParagraph">
            <p className="footerLeftParagraphItem">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus necessitatibus quisquam ipsam recusandae, explicabo
              porro eligendi earum est voluptatum, aliquam laudantium
              exercitationem cumque voluptatibus labore, velit laboriosam nobis
              in. Facilis?
            </p>
          </div>
        </div>
        <div className="footerCenter">
          <ul className="footerCenterList">
            <li
              onClick={() => props.handleNavigation("home")}
              className="footerListItem"
            >
              Home
            </li>
            <li
              onClick={() => props.handleNavigation("aboutUs")}
              className="footerListItem"
            >
              About Us
            </li>
            <li
              onClick={() => props.handleNavigation("services")}
              className="footerListItem"
            >
              Services
            </li>
            <li
              onClick={() => props.handleNavigation("contactUs")}
              className="footerListItem"
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="footerRight">
          <div className="footerRightTitle">
            <p className="footerRightHeading">Contact</p>
          </div>
          <div className="footerRightEmail">
            <i className="footerEmail fa-solid fa-envelope"></i>
            <p className="footerEmailItem">contact@9umbatravels.com</p>
          </div>
          <div className="footerContactIcon">
            <i className="footerContactIconItem fa-solid fa-phone"></i>
            <i className="footerContactIconItem fa-brands fa-facebook"></i>
            <i className="footerContactIconItem fa-brands fa-twitter"></i>
            <i className="footerContactIconItem fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="footerCopyright">
        <p className="footerCopyrightItem">Copyright © 2023 Caregreek</p>
      </div>
    </div>
  );
}

export default Footer;
