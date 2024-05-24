import { Request, Response, NextFunction } from "express";

class CustomError extends Error {
	public statusCode: number;
	public result: any;
	constructor(message: string, statusCode: number, result: any) {
		super(message);
		this.statusCode = statusCode;
		this.result = result;
	}
}

function errorHandler(
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	const result = err?.result || null;

	res.status(statusCode).json({
		message,
		statusCode,
		result,
	});
}

export default errorHandler;
export { CustomError };
