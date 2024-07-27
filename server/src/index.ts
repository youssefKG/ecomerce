import "reflect-metadata";
import express, { Express } from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import productRouter from "./routes/product";
import { authRoute, productRoute, cartRoutes, reviewRoute } from "./routes";
import errorHandler from "./utils/errorHandler.ts";

const app: Express = express();

app.use(express.json());
dotenv.config();
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));
app.use(cookieParser());

// routes start
app.use("/api/product", productRouter);
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoutes);
app.use("/api/review", reviewRoute);
// routes end

// goloabl express error handler
app.use(errorHandler);

app.listen(1900, () => {
  console.log("server runing on port ", process.env.PORT);
});
