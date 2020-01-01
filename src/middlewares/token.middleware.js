import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
const validateToken = (req, res, next) => {  
  const { token: headerToken = null } = req.headers;
  const { token: bodyToken = null } = req.body; 
  const token = bodyToken || headerToken;
  if (!token)
    return res.status(401).json({
      status: '401 unauthorized',
      error: 'You must be Logged in to Proceed'
    });  
    
    jwt.verify(token, process.env.SECRET, (error, result) => {
        if (error)
        return res.status(401).json({
            status: '401 Unauthorized',
            error: 'Access token is Invalid'
        });           
        req.headers.payLoad=result.data;  
        req.headers.token=token;                     
        return next();
    });
};
export default validateToken;