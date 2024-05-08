import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
async function main(): Promise<void> {
  const user = await client.user.create({
    data: {
      firstName: "youssef",
      lastName: "youssef",
      email: "yousseftaoussi@gmail.com",
      imgURL: "test",
      adress: "test ",
      role: "ADMIN",
      isLogin: false,
      password: "test",
      salt: "test",
    },
  });
  console.log(user);
}
export default main;
