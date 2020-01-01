import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Auth from './../db/models/auth.model';
import Application from './../db/models/application.model';


class UserServices{  
    static generateToken(id, isAdmin,firstName) {
      const token = jwt.sign(
        {
          data: { id, isAdmin, firstName }
        },
        process.env.SECRET || 'alternativeSecret',
        { expiresIn: '30d' }
      );
      return token;
    }
  
    static async encrptPassword(password) {
      const pass = await bcrypt.hash(password, 8);
      return pass;
    }
  
    static async verifyPassword(plainText, hashedText) {
      try {
        const isMatch = await bcrypt.compare(plainText, hashedText);
        return isMatch;
      } catch (error) {
        throw error;
      }
    }

    static async emailExist(emailAddress) {
        try {
            const condition ={
                email:emailAddress                
            }          
            const user= await Auth.find(condition,(err, User) => {
              if (err) console.log(err);
            });
            return user;
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Checking email'
          });
        }
    }

    static async userExist(req, res, next) {      
      try {
          const condition ={
              userId:req.headers.payLoad.id              
          }          
           await Application.find(condition,(err, User) => {
              if (err) console.log(err);
              if (User.length)
                return res.status(409).json({
                  status: '409 Conflict',
                  error: 'You have already submitted an application'
                });
              return next();              
           });
         
      } catch (err) {
        return res.status(500).json({
          status: '500 Internal server error',
          error: 'Error Validating Email Address'
        });
      }
    }

    static async getUserById(id) {
      try {   
          const condition ={
            _id:id            
          }           
          const user= await Auth.find(condition,(err, User) => {
            if (err) console.log(err);                                  
          });                  
          return user;  
                   
      } catch (err) {
        return res.status(500).json({
          status: '500 Internal server error',
          error: 'Error Checking email'
        });
      }
  }

  
  }
  export default UserServices;