import { User } from "@prisma/client";

type NewUserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salt: string;
  adress: string;
  imgURL: string;
  role: "ADMIN" | "USER";
  isLogin: boolean;
};

interface IUserFields {
  id?: boolean;
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  password?: boolean;
  imgURL?: boolean;
  isLogin?: boolean;
  salt?: boolean;
  role?: boolean;
  adress?: boolean;
}

interface IUpdateProfileData {
  firstName: string;
  lastName: string;
  currentPassword: string;
  newPassword: string;
  adress: string;
  confirmNewPassword: string;
}

type CurrentUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
  isLogin: boolean;
  imgURL: string;
  password: string;
};

export { NewUserType, IUpdateProfileData, User, IUserFields, CurrentUser };
