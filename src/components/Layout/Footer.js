import React from "react";
import {Link} from "react-router-dom"
import "../../static/style/layout/footer.css";
const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="container-fluid">
        <div className="footer-p1">
          <div className="icon-group">
            <div className="icon-circle">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div className="icon-circle">
              <i class="fab fa-instagram"></i>
            </div>
            <div className="icon-circle">
              <i class="fab fa-twitter"></i>
            </div>
            <div className="icon-circle">
              <i class="fab fa-linkedin"></i>
            </div>
          </div>
          <div className="link-group">
            <p className = "footer-nav"><Link to = '/' >HOME </Link>| CONTACT | ABOUT US | <Link to = "/dealer" >DEALER</Link> </p>
          </div>
        </div>
        <footer className="footer-p2">
          <div className="copyright">
            <p>Copyright © 2021 Printrox - All Rights Reserved.</p>
            <p>A Product of Forever Pvt. Ltd.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
