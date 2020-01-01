import { Router } from 'express';
import AuthController from './../controllers/auth.controller';
import SignUpValidation from './../middlewares/signupValidation.middleware';
import LoginValidation from './../middlewares/loginValidation.middleware';
import validateToken from './../middlewares/token.middleware';

const router = Router();

router.get( '/user', 
validateToken,
AuthController.loadUser);

router.post( '/login', 
LoginValidation.validateData(),
LoginValidation.myValidationResult,
AuthController.login);

router.post( '/signup',
SignUpValidation.validateData(),
SignUpValidation.myValidationResult,
SignUpValidation.EmailAlreadyExist,
AuthController.signUp);

export default router;