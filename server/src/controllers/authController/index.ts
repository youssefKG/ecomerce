import { Request, Response, NextFunction } from "express";
import { UserType } from "../../types";
import {
	LoginFormDataType,
	RegisterFormDataType,
	LoginFormDataErrorsType,
	RegisterFormDataErrorsType,
} from "../../types";
import { IUserRepository } from "../../repositories/UserRepositories";
import { IValidationService } from "../../services/validate.service";
import { ITokenService } from "../../services/jwtToken.service";
import { IPasswordService } from "../../services/password.service";
import { CustomError } from "../../utils/errorHandler.ts";

interface IAuthenticator {
	validationService: IValidationService;

	loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;

	registerUser: (
		req: Request,
		res: Response,
		next: NextFunction,
	) => Promise<void>;

	logoutUser: (
		req: Request,
		response: Response,
		next: NextFunction,
	) => Promise<void>;
}

class Authenticator implements IAuthenticator {
	private userRepository: IUserRepository;
	public validationService: IValidationService;
	private passwordService: IPasswordService;
	private tokenService: ITokenService;

	constructor(
		userRepository: IUserRepository,
		validate: IValidationService,
		passwordService: IPasswordService,
		tokenService: ITokenService,
	) {
		this.userRepository = userRepository;
		this.validationService = validate;
		this.passwordService = passwordService;
		this.tokenService = tokenService;
	}

	public async loginUser(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<any> {
		try {
			// destructure the email and password from req body
			const { email, password }: LoginFormDataType = req.body;

			// validate user data
			const validationErrors: LoginFormDataErrorsType =
				this.validationService.validateLoginFormData({
					email,
					password,
				});

			// if validation fail responde with error
			if (
				!this.validationService.isEmpty(validationErrors) ||
				!email ||
				!password
			) {
				next(
					new CustomError(
						"validation rules not match from",
						403,
						validationErrors,
					),
				);
				return;
			}

			// find user by email
			const userWithEmail: UserType | null =
				await this.userRepository.findByEmail(email);

			// if there is no account with this email respond with error
			if (!userWithEmail) {
				next(
					new CustomError("No account with email has been register", 401, null),
				);
				return;
			}

			// compare the password whit hash password with salt
			const isPasswordValid: boolean = this.passwordService.verifyPassword(
				password,
				userWithEmail.password,
			);

			// respond with 401 error if the password does not match the hash with salt
			if (!isPasswordValid) {
				next(new CustomError("Wrong credentials", 401, null));
				return;
			}

			// generate jwt token
			const token: string = this.tokenService.generateToken({
				id: userWithEmail.id,
				firstName: userWithEmail.firstName,
				lastName: userWithEmail.lastName,
				email: userWithEmail.email,
				role: userWithEmail?.role,
				isLogin: userWithEmail.isLogin,
			});

			// update the data to user islogin = true
			await this.userRepository.updateUser(email, { isLogin: true });

			// asign the cookie in the borwser and response with user information
			res
				.status(200)
				.cookie("totib-token", token, {
					maxAge: 1000 * 60 * 60 * 24,
					httpOnly: true,
				})
				.json({
					success: true,
					result: {
						id: userWithEmail?.id,
						firstName: userWithEmail.firstName,
						lastName: userWithEmail.lastName,
						email: userWithEmail.email,
						adress: userWithEmail?.adress,
						role: "ADMIN",
					},
				});
		} catch (err) {
			next(err);
		}
	}

	public async registerUser(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			// destructure user information from req body
			const { firstName, lastName, email, password }: RegisterFormDataType =
				req.body;

			// validate user data
			const validationErrors: RegisterFormDataErrorsType =
				this.validationService.validateRegisterFormData(req.body);

			// if validation fail respond with 403 error
			if (
				!this.validationService.isEmpty(validationErrors) ||
				!email ||
				!password ||
				!firstName ||
				!lastName
			) {
				next(
					new CustomError("validation rules not match", 403, validationErrors),
				);
				return;
			}

			// find a account whith this email
			const userWithTheSameEmail: UserType | null =
				await this.userRepository.findByEmail(email);

			// if there is account  account with the same email res with 400 status  error message
			if (userWithTheSameEmail) {
				next(
					new CustomError("account with this email already exist!", 400, null),
				);
				return;
			}

			// generate the salte and create the hash password
			const hashPassword: string = this.passwordService.hashPassword(password);

			// create a new user
			await this.userRepository.createUser({
				firstName,
				lastName,
				imgURL: "",
				role: "USER",
				email,
				adress: "",
				password: hashPassword,
				salt: "",
				isLogin: true,
			});

			// res with 200 status code and success message
			res.status(200).json({
				success: true,
				message: "account created successfuly!",
				result: null,
			});
		} catch (err) {
			console.log(err);
			// catch an error and pass it to global error handler
			next(err);
		}
	}

	public async logoutUser(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			// destructure email from req obj
			const email: string = req.currentUser.email;

			// check if the user is already login
			if (!req.currentUser.isLogin) {
				next(new CustomError("only login users cand logout", 400, null));
				return;
			}

			// update the user to logout
			await this.userRepository.updateUser(email, { isLogin: true });

			res.status(200).clearCookie("totib-token").json({
				success: true,
				message: "logout successfuly",
				result: null,
				jwtExpire: true,
			});
		} catch (err) {
			next(err);
		}
	}
}

export default Authenticator;
export { IAuthenticator };
