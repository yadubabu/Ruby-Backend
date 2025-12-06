import jwt from 'jsonwebtoken';

  const vendorMiddleware=async(req,res,next)=>{
    
    const getToken=jwt.verify(req.headers.token,process.env.SecretCode);

    if(getToken){
        req.vendorId=getToken.userId;
       next()
    }


 }

export default vendorMiddleware;