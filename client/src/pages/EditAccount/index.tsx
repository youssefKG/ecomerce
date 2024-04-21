import { useContext, useState, useEffect, ChangeEvent } from "react";
import { CurrentUserType } from "../../types";
import { AuthContext } from "../../context";
import { Paper } from "@mui/material";
import "./index.css";
interface EditAccountDataType extends CurrentUserType {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
const EditAccount = () => {
  const { currentUser } = useContext(AuthContext);
  const [profilData, setProfilData] = useState<EditAccountDataType | null>(
    null,
  );
  const handleEditFromAccountChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setProfilData({ ...profilData, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    if (currentUser) {
      setProfilData({
        ...currentUser,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, []);
  return (
    <Paper className="edit-account-container">
      <h1 className="edit-pass-header">Edit Your Profil</h1>
      <div className="account-info-container">
        <div className="name-container">
          <div className="input-champ-container">
            <label>First Name : </label>
            <input
              name="firstName"
              className="first-name"
              placeholder="First Name"
              value={profilData?.firstName}
            />
          </div>
          <div className="input-champ-container">
            <label>Last Name : </label>
            <input
              id="lastName"
              className="last-name"
              placeholder="Last Name"
              value={profilData?.lastName}
              name="lastName"
            />
          </div>
        </div>
        <div className="input-champ-container">
          <label>Email:</label>
          <input
            name="email"
            className="first-name"
            placeholder="First Name"
            value={profilData?.email}
          />
        </div>
        <div className="input-champ-container">
          <label>Address :</label>
          <input
            className="address"
            placeholder="derb khalid rue 10 n 89"
            value={profilData?.address}
            name="lastName"
          />
        </div>
      </div>
      <div className="change-password-container">
        <h2>Change Password</h2>
        <input
          name="currentPassword"
          value={profilData?.currentPassword}
          className="current-password"
          placeholder="Current Password"
        />
        <input
          name="newPassword"
          value={profilData?.newPassword}
          className="new-password"
          placeholder="New Password"
        />
        <input
          name="confirmNewPassword"
          value={profilData?.confirmNewPassword}
          className="confirm-new-password"
          placeholder="Confirm New Password"
        />
      </div>
      <div className="btns">
        <button className="cancel-btn">Cancel</button>
        <button className="save-changes-btn">Save Changes</button>
      </div>
    </Paper>
  );
};
export default EditAccount;
