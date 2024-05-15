import {
  CiDeliveryTruck,
  CiHeadphones,
  IoShieldCheckmarkOutline,
} from "../../assets/icons";
import "./index.css";
const WhyUsSection = () => {
  return (
    <div className="why-us-section">
      <h1>Why Us</h1>
      <div className="why-us-container">
        <div className="why-us">
          <CiDeliveryTruck className="icon-delivery" />
          <h1>Free And Fast Delivery</h1>
          <p>free delivery for all order over $100</p>
        </div>
        <div className="why-us">
          <CiHeadphones className="icon-customer-service" />
          <h1>24/7 Customer Service</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="why-us">
          <IoShieldCheckmarkOutline className="icon-shield" />
          <h1>Money Back Guarantee</h1>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
export default WhyUsSection;
