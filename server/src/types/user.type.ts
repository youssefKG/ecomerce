interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  role: "ADMIN" | "USER";
}

export { UserType };
