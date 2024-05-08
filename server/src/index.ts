import express, { Express, Request } from "express";
import * as dotenv from "dotenv";
import session from "express-session";
import mongoStore from "connect-mongo";
import cors from "cors";
import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import productRouter from "./routes/product";
import { authRoute } from "./routes";

const app: Express = express();

app.use(express.json());
dotenv.config();
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(
  session({
    secret: process.env.SESSSION_SECRET || "session secret",
    store: mongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      callbackURL: "http://localhost:5173/api/auth/google/callback",
      passReqToCallback: true,
    },
    (
      req: Request,
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) => {
      console.log(profile);
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});
passport.deserializeUser((user: any, done) => {
  done(null, user);
});
app.get(
  "api/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

app.get(
  "api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  }),
);

app.use("/api/product", productRouter);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
  console.log("server runing on port ", process.env.PORT);
});
