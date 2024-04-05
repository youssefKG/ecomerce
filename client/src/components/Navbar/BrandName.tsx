import {
  FaInstagramSquare,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
const BrandName = () => {
  return (
    <div className="brandNameContainer">
      <ul>
        <li className="">
          <IoIosCall className="brandNameIcon" />
          <p>07 67 20 22 01</p>
        </li>
        <li className="">
          <MdEmail className="brandNameIcon" />
          <p>yousseftaoussi894@gmail.com</p>
        </li>
        <li className="">
          <p>Follow us :</p>
          <a>
            <FaInstagramSquare />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default BrandName;
