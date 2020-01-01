
const authorize = (req, res, next) => {  
  const { payLoad } = req.headers;  
  if (!payLoad.isAdmin)
    return res.status(401).json({
      status: '401 unauthorized',
      error: 'You must be an Admin to proceed'
    });  
    return next();
    
};
export default authorize;