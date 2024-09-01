import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import { Badge } from "@mui/material";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ProfilBackDrop from "../ProfilBackDrop";

const ProfileMenu = () => {
  const { setBackdropAuth, currentUser, logout } = useContext(AuthContext);

  return (
    <>
      {currentUser ? (
        <div className="currentUser">
          <Link to="/cart">
            <Badge
              badgeContent={true}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              color="warning"
              variant="dot"
            >
              <ShoppingBagIcon className="shoppingCartIcon size-6" />
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
    </>
  );
};

export default ProfileMenu;
