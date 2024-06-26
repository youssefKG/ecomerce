interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  imgURL: string;
  email: string;
  adress: string;
  role: "ADMIN" | "USER";
  password: string;
  isLogin: boolean;
  salt: string;
}

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

interface IUpdatableUserDataType {
  firstName?: string;
  lastName?: string;
  password?: string;
  imgURL?: string;
  isLogin?: boolean;
}
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

export default UserType;
export { NewUserType, IUpdatableUserDataType, IUserFields };
