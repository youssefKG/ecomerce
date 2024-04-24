import express, { Express } from "express";
import { createServer } from "https";
import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";
import session from "express-session";
import mongoStore from "connect-mongo";
import { authRoute } from "./routes";
const app: Express = express();
const client = new PrismaClient();
// const options: any = {
//   key: fs.readFileSync(path.join(__dirname, "cert.key")),
//   cert: fs.readFileSync(path.join(__dirname, "cert.crt")),
// };
// const httpsServer = createServer(options, app);
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
// main();
dotenv.config();

app.use(cors({ origin: ["http://localhost:5153"] }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSSION_SECRET || "session secret",
    store: mongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);
// app.use("/api/", authRoute);
app.listen(process.env.PORT, () => {
  console.log("server runing on port 1900", process.env.PORT);
});
