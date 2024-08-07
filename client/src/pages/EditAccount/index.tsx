import { useContext, useState, useEffect, ChangeEvent, FormEvent } from "react";
import { AuthContext, NotificationContext } from "../../context";
import profilService from "../../services/editProfil";
import { ResponseI } from "../../api";
import { EditProfilData } from "../../types";
import { Paper } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import "./index.css";

const EditAccount = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { showNotification } = useContext(NotificationContext);
  const [profilData, setProfilData] = useState<EditProfilData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleEditFromAccountChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setProfilData({ ...profilData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response: ResponseI =
        await profilService.editProfilService(profilData);

      if (response.status === 200) {
        showNotification("success", "Profil data updated successfully!!");
        setCurrentUser(response.data.result);
      }
    } catch (err) {
      showNotification("error", err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () =>
    setProfilData({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      address: currentUser.address,
      email: currentUser.email,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });

  useEffect(() => {
    if (currentUser) {
      setProfilData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        address: currentUser.address,
        email: currentUser.email,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, []);

  return (
    <Paper className="edit-account-container  ">
      <form onSubmit={handleSubmit}>
        <h1 className="edit-pass-header">Edit Your Profil</h1>
        <div className="account-info-container">
          <div className="name-container">
            <div className="input-champ-container">
              <label>First Name : </label>
              <input
                onChange={handleEditFromAccountChange}
                name="firstName"
                className="first-name"
                placeholder="First Name"
                value={profilData?.firstName}
              />
            </div>
            <div className="input-champ-container">
              <label>Last Name : </label>
              <input
                onChange={handleEditFromAccountChange}
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
              onChange={handleEditFromAccountChange}
              name="email"
              className="first-name"
              placeholder="First Name"
              value={profilData?.email}
            />
          </div>
          <div className="input-champ-container">
            <label>Address :</label>
            <input
              onChange={handleEditFromAccountChange}
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
            onChange={handleEditFromAccountChange}
            name="currentPassword"
            value={profilData?.currentPassword}
            className="current-password"
            placeholder="Current Password"
          />
          <input
            onChange={handleEditFromAccountChange}
            name="newPassword"
            value={profilData?.newPassword}
            className="new-password"
            placeholder="New Password"
          />
          <input
            onChange={handleEditFromAccountChange}
            name="confirmNewPassword"
            value={profilData?.confirmNewPassword}
            className="confirm-new-password"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="btns">
          <button onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button
            type="submit"
            className="flex justify-center items-center bg-blue-900 text-white w-36 text-center"
          >
            {isLoading ? (
              <RotatingLines
                visible={true}
                width="20"
                strokeWidth="3"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                strokeColor="gray"
              />
            ) : (
              <p>Save Changes</p>
            )}
          </button>
        </div>
      </form>
    </Paper>
  );
};
export default EditAccount;
