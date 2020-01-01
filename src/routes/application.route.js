import { Router } from 'express';
import ApplicationController from '../controllers/application.controller';
import UserService from './../services/user.service';
import validateToken from './../middlewares/token.middleware';
import authorize from './../middlewares/authorization.middleware';
import ImageUpload from './../middlewares/uploadImage.middleware';
// import ApplicationValidation from './../middlewares/application.middleware';

const router = Router();

router.post('/add',
 validateToken,
//  ApplicationValidation.validateData(),
//  ApplicationValidation.myValidationResult,
 UserService.userExist,
 ImageUpload.upload,
 ApplicationController.createApplication);

 router.get('/',
 validateToken,
 authorize,
 ApplicationController.getApplications);

export default router;