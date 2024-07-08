export {};
type UserRequest = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
  isLogin: boolean;
  imgURL: string;
};

declare global {
  namespace Express {
    export interface Request {
      session: any;
      currentUser: UserRequest;
    }
  }
}
