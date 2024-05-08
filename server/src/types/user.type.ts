interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  email: string;
  adress: string;
  role: "ADMIN" | "USER";
}

export default UserType;
