import bcrypt from "bcryptjs";

interface IPasswordService {
  hashPassword: (password: string) => string;
  verifyPassword: (password: string, hashPassword: string) => boolean;
}

class PasswordService implements IPasswordService {
  // hash the user password before store it to data base
  hashPassword(password: string): string {
    const salt: string = bcrypt.genSaltSync(10);
    const hash: string = bcrypt.hashSync(password, salt);
    return hash;
  }

  // compare the hash password whith password
  verifyPassword(password: string, hashPassword: string): boolean {
    const isValidPasswor: boolean = bcrypt.compareSync(password, hashPassword);
    return isValidPasswor;
  }
}

export default PasswordService;
export { IPasswordService };
