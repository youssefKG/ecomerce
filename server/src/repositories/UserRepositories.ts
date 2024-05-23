import { PrismaClient } from "@prisma/client";
import UserType from "../types/user.type";
import { NewUserType } from "../types/user.type";
import { IUserFields, IUpdatableUserDataType } from "../types";

interface IUserRepository {
  findByEmail: (email: string, fields?: any) => Promise<UserType | null>;
  createUser: (newUserData: NewUserType) => Promise<void>;
  updateUser: (email: string, newData: IUpdatableUserDataType) => Promise<void>;
}

class UserRepositories implements IUserRepository {
  protected prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  // get all fields by email
  public async findByEmail(
    email: string,
    fields?: IUserFields,
  ): Promise<UserType | null> {
    if (!fields) {
      const user: UserType | null = await this.prisma.user.findUnique({
        where: { email },
      });
      return user;
    }

    const user: UserType | null = await this.prisma.user.findUnique({
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
