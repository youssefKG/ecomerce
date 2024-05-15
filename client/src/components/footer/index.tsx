import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaRegCopyright,
  IoLogoAppleAr,
  BsTwitterX,
} from "../../assets/icons";
import "./index.v2.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container">
        <div className="brandName">
          <div className="">
            <IoLogoAppleAr className="brandNameIcon" />
            <h1>TOTIB</h1>
          </div>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </div>
        <div className="socail-media">
          <h1>Socail Media</h1>
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
