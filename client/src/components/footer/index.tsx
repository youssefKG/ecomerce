import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="socail-media">
          <h1>Get In Touch</h1>
          <p>the quick jumb </p>
          <div>
            <a>
              <BsTwitterX className="icon" />
            </a>
            <a>
              <FaInstagram className="icon" />
            </a>
            <a>
              <FaFacebook className="icon" />
            </a>
          </div>
        </div>
        <div className="company-info">
          <h1>About Us</h1>
          <Link to="">
            <p>About</p>
          </Link>
          <Link to="">
            <p>Carrier</p>
          </Link>
          <Link to="">
            <p>Blog</p>
          </Link>
        </div>
        <div className="about">
          <h1>About Us</h1>
          <Link to="">
            <p>Android & Ios </p>
          </Link>
          <Link to="">
            <p>Api</p>
          </Link>
          <Link to="">
            <p>Customers</p>
          </Link>
        </div>
      </div>
      <div className="copy-right">
        <p>all copy right are reserved</p>
        <FaRegCopyright className="icon" />
      </div>
    </footer>
  );
};
export default Footer;
