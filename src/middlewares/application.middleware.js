import { check, validationResult } from 'express-validator';

class Application {
  static validateData() {
    return [          
        check('position')
            .exists()
            .withMessage('Position is Required')
            .not()
            .isEmpty()
            .withMessage('Position cannot be empty'),
        check('department')
            .exists()
            .withMessage('Department is Required')
            .not()
            .isEmpty()
            .withMessage('Department cannot be empty'),
        check('employmentDate')
            .exists()
            .withMessage('Employment Date is Required')
            .not()
            .isEmpty()
            .withMessage('Employment Date cannot be empty'),
        check('employmentNo')
            .exists()
            .withMessage('Employment Number is Required')
            .not()
            .isEmpty()
            .withMessage('Employment Number cannot be empty'),
        check('phoneNumber')
            .exists()
            .withMessage('Phone Number is Required')
            .not()
            .isEmpty()
            .withMessage('Phone Number cannot be empty'),
        check('games')
            .exists()
            .withMessage('Sports  is Required')
            .not()
            .isEmpty()
            .withMessage('Sports cannot be empty')        
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
export default Application;