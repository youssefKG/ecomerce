import { Request, Response, NextFunction } from "express";
const catchError = (
  cb: (req: Request, res: Response, next: NextFunction) => Promise<any>,
) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    cb(req, res, next).catch((error: any) => {
      console.log(error);
      switch (error.name) {
        case "emptyInput":
          res.status(400).json({
            success: false,
            message: "All fields are requiered",
            result: null,
            error,
          });
          break;
        case "Validation":
          res.status(400).json({
            success: false,
            message: "invalid Input !",
            result: null,
            error,
          });
          break;
        case "invalidEmail":
          res.status(400).json({
            success: false,
            result: null,
            message: "Invalid Email ",
            error: error,
          });
          break;
        case "InvalidPassword":
          res.status(400).json({
            success: false,
            message: "Email or passsword incorrect ",
            error,
          });
          break;
        default:
          res.status(500).json({
            success: false,
            message: error.message,
            error,
          });
          break;
      }
    });
  };
};
const productionError = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  res.status(500).json({
    success: false,
    message: error.message,
    error,
  });
};
export { catchError, productionError };
