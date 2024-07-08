import { User } from "@prisma/client";
import { Database } from "../../services";
import { NewUserType } from "../../types/user.type";
import { IUserFields, IUpdatableUserDataType } from "../../types";
import { delay, inject, injectable } from "tsyringe";

interface IUserRepository {
  findByEmail: (email: string, fields?: any) => Promise<User | null>;
  createUser: (newUserData: NewUserType) => Promise<void>;
  updateUser: (email: string, newData: IUpdatableUserDataType) => Promise<void>;
  findUserById: (userId: string) => Promise<User | null>;
}

@injectable()
class UserRepositories implements IUserRepository {
  constructor(@inject(delay(() => Database)) private prisma: Database) {}

  // get all fields by email
  public async findUserById(userId: string): Promise<User | null> {
    try {
      const findUser: User | null = await this.prisma.user.findUnique({
        where: { id: userId }, });
      return findUser;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async findByEmail(
    email: string,
    fields?: IUserFields,
  ): Promise<User | null> {
    if (!fields) {
      const user: User | null = await this.prisma.user.findUnique({
        where: { email },
      });
      return user;
    }

    const user: User | null = await this.prisma.user.findUnique({
      where: { email },
      select: fields,
    });

    return user;
  }

  public async createUser(newUserData: NewUserType): Promise<void> {
    try {
      await this.prisma.user.create({
        data: newUserData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  public async updateUser(
    email: string,
    newData: IUpdatableUserDataType,
  ): Promise<void> {
    await this.prisma.user.update({
      where: { email },
      data: newData,
    });
  }
}

export default UserRepositories;
export { IUserRepository };
