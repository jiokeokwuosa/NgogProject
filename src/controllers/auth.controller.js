import Auth from './../db/models/auth.model';
import UserServices from './../services/user.service';

class AuthController {

      static async loadUser(req, res) {     
        try {     
          const { token } =req.headers;           
          const user = {
            id: req.headers.payLoad.id,
            isAdmin: req.headers.payLoad.isAdmin,
            firstName: req.headers.payLoad.firstName
          }    
          const response ={
            token,
            user
          }
          return res.status(200).json({
            status: 'success',
            data: response
          });   
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error loading user'
          });
        }
    }

    static async login(req, res) {         
        try {
          const {email, password} =req.body;
          const user = await UserServices.emailExist(email); 
         
          if (!user.length)
            return res.status(409).json({
              status: '400 Invalid Request',
              error: 'Invalid Email address'
            }); 
                       
          const confirmPassword = await UserServices.verifyPassword(password,user[0].password); 
          if(!confirmPassword)            
            return res.status(409).json({
              status: '400 Invalid Request',
              error: 'Invalid Password'
            }); 
            
          const token = UserServices.generateToken(user[0]._id, user[0].isAdmin,user[0].firstName);
          const response ={
            token,
            user:{
              id: user[0]._id,
              firstName:user[0].firstName,
              isAdmin:user[0].isAdmin
            }          
          }   
            
          return res.status(200).json({
            status: 'success',
            data: response
          });           
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Logging in user'
          });
        }
    }  

    static async signUp(req, res) {         
        try {
            const {email, password, firstName, lastName} =req.body; 
            const encryptpassword = await UserServices.encrptPassword(password); 
            const newUser ={
                email,
                password: encryptpassword,
                firstName,
                lastName
            }
              await Auth.create({...newUser}, (err, createdUser) => {
                if (err) {
                  console.log(err);
                  throw new Error('Error Creating new User');
                }  
                const {_id: id, isAdmin, firstName}=createdUser;                             
                const token = UserServices.generateToken(id, isAdmin,firstName);               
                const response ={
                  token,
                  user:{
                    id,
                    firstName,
                    isAdmin
                  }          
                }                  
                return res.status(201).json({
                  status: 'success',
                  data: response
                });                 
             });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Creating new User'
          });
        }
    }  
   
  }
  export default AuthController;