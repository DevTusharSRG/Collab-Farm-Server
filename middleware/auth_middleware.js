const jwt = require("jsonwebtoken")
const User = require("../model/user_model")

const authMiddleware =async (req,res,next)=>{
    const token = req.header("Authorization")

    if (!token){
        return res.status(401).json({msg:'authorized token was not provided'})

    }
    const jwttoken = token.replace("Bearer ", "").trim();
    // console.log('token from auth middleware',jwttoken);
    try {
        const isVerified = jwt.verify(jwttoken,process.env.JWT_SECRETE)
        const userData = await User.findOne({email:isVerified.email})
        .select({
            password:0,
        });
        // console.log(userData);
        req.user=userData;
        req.token=token;
        req.userId = userData._id
        next();
    } catch (error) {
        return res.status(401).json({msg:"unotherized token has passed"})
    }
    
}

module.exports= authMiddleware