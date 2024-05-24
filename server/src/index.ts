import express, { Express, NextFunction, Request } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/product";
import { authRoute } from "./routes";
import errorHandler from "./utils/errorHandler.ts";

const app: Express = express();

app.use(express.json());
dotenv.config();
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.use("/api/product", productRouter);
app.use("/api/auth", authRoute);

// globaleErrorHandler
app.use(errorHandler);
app.listen(process.env.PORT, () => {
	console.log("server runing on port ", process.env.PORT);
});
