import { useContext, useState, useEffect } from "react";
import { CurrentUserType } from "../../types";
import { AuthContext } from "../../context";
import { Paper } from "@mui/material";
import "./index.css";

const Profil = () => {
  const [profilData, setProfilData] = useState<CurrentUserType | null>(null);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) setProfilData(currentUser);
  }, []);

  return (
    <div className="-container">
      <Paper>
        <div className="edit-profil-container">
          <h1 className="edit-pass-header">Edit Your Profil</h1>
          <div className="acount-info-container">
            <input
              name="firstName"
              className="first-name"
              placeholder="First Name"
              value={profilData?.firstName}
            />
            <input
              className="first-name"
              placeholder="First Name"
              value={profilData?.firstName}
              name="lastName"
            />
          </div>
          <div className="">
            <input
              name="email"
              className="first-name"
              placeholder="First Name"
              value={profilData?.email}
            />
            <input
              className="address"
              placeholder="derb khalid rue 10 n 89"
              value={profilData?.address}
              name="lastName"
            />
          </div>
          <div className="change-password-container">
            <h2>Change Password:</h2>
            <input
              className="current-password"
              placeholder="Current Password"
            />
            <input className="new-password" placeholder="New Password" />
            <input
              className="confirm-new-password"
              placeholder="Confirm New Password"
            />
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Profil;
