import { Request, Response, NextFunction } from "express";
import { CustomError } from "../../utils/errorHandler.ts";
import { CurrentUser } from "../../types";

function verifyAdmin(req: Request, res: Response, next: NextFunction): void {
  const user: CurrentUser = req.currentUser;

  if (user.role === "ADMIN") return next();

  return next(
    new CustomError(
      "Access denied. Only admins are allowed to perform this action.",
      403,
      null,
    ),
  );
}

export default verifyAdmin;
