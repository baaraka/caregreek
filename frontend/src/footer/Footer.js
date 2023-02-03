import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerDiv">
        <div className="footerLeft">
          <div className="footerLeftImage">
            <img
              src="http://caregreek.com/static/media/logo.597684787fc988fd5ffb.png"
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
            <li className="footerListItem">Home</li>
            <li className="footerListItem">About Us</li>
            <li className="footerListItem">Services</li>
            <li className="footerListItem">Contact</li>
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
