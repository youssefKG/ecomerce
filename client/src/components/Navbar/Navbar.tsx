import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { Badge } from "@mui/material";
import ProfilBackDrop from "../ProfilBackDrop";
import { IoLogoAppleAr, IoMdCart } from "../../assets/icons";

const Navbar = () => {
  const { setBackdropAuth, currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbarContainer">
      <Link to="/" className="brandName">
        <IoLogoAppleAr className="brandNameIcon" />
        <p>Totib</p>
      </Link>
      <ul>
        <li>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
            <p>Product</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <p>Contact Us</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">
            <p>Blog</p>
          </NavLink>
        </li>
      </ul>
      <div className="profil">
        {currentUser ? (
          <div className="currentUser">
            <Link to="/cart">
              <Badge
                badgeContent={true}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                color="warning"
                variant="dot"
              >
                <IoMdCart className="shoppingCartIcon" />
              </Badge>
            </Link>
            <ProfilBackDrop logout={logout} />
          </div>
        ) : (
          <div className="auth-btns-container">
            <button
              onClick={(): void =>
                setBackdropAuth({ isLoginOpen: true, isSignupOpen: false })
              }
            >
              <p className="text-sm">Login</p>
            </button>
            <div className="devider" />
            <button
              onClick={() =>
                setBackdropAuth({ isLoginOpen: false, isSignupOpen: true })
              }
            >
              <p className="text-sm">Signup</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
