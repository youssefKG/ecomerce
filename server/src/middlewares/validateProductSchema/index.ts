import { Request, Response, NextFunction } from "express";
import { ValidationError } from "joi";
import { productSchema } from "../../validators";
import { CustomError } from "../../utils/errorHandler.ts";

const validateproductSchema = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // error of product schema
  const error: ValidationError | undefined = productSchema.validate(
    req.body,
  ).error;

  // if send error if is it invalid schema
  if (error) {
    next(new CustomError("invalid schema ", 403, error));
    return;
  }

  // go to the next middlware if product schema valid
  next();
};

export default validateproductSchema;
