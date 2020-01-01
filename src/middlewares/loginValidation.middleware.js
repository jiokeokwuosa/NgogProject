import { check, validationResult } from 'express-validator';

class Login {
  static validateData() {
    return [          
      check('email')
        .exists()
        .withMessage('Email is Required')
        .not()
        .isEmpty()
        .withMessage('Email cannot be empty')
        .isEmail()
        .withMessage('Email Should be a valid Email Address'),
      check('password')
        .exists()
        .withMessage('Password is Required')
        .not()
        .isEmpty()
        .withMessage('Password cannot be empty')        
        .trim()
        .escape()      
    ];
  }

  static async myValidationResult(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errArr = errors.array().map(({ msg }) => msg);
      return res.status(400).json({
        status: '400 Invalid Request',
        error: 'Your request contains invalid parameters',
        errors: errArr
      });
    }

    return next();
  }
  
}
export default Login;