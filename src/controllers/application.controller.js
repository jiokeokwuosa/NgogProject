import Application from './../db/models/application.model';
import Auth from './../db/models/auth.model';
import UserServices from './../services/user.service';

class ApplicationController {
    
    static async createApplication(req, res) {         
        try {    

            const userId =req.headers.payLoad.id;              
            const {position, department, dateOfEmployment, employmentNo, phone, imageUrl, fileUrl, games } =req.body;  
            const newApplication ={
              userId,
              position,
              department,
              dateOfEmployment,
              employmentNo,
              phone,
              imageUrl,
              fileUrl,
              games
            }            
            await Application.create({...newApplication}, (err, createdApplication) => {
                if (err) console.log(err);               
                
                return res.status(201).json({
                    status: 'success',
                    data: createdApplication
                });                 
            });
        } catch (err) {
          return res.status(500).json({
            status: '500 Internal server error',
            error: 'Error Creating new Application'
          });
        }
    }    

    static async getApplications(req, res) {     
      try {
         const result= await Application.find().populate('userId');  
         const response =  result.map(item => {
           return{
             name:`${item.userId.lastName} ${item.userId.firstName}`,
             email:item.userId.email,
             department:item.department,
             position:item.position,
             games:item.games,
             imageUrl:item.imageUrl,
             fileUrl:item.fileUrl 
           }
         })    
          return res.status(200).json({
            status: 'success',
            data: response
          });     
      } catch (err) {
        return res.status(500).json({
          status: '500 Internal server error',
          error: 'Error getting applications'
        });
      }
    } 
   
  }
  export default ApplicationController;