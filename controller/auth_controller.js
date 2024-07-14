const User = require("../model/user_model")
const bcrypt = require("bcryptjs");
// The codse for the registration page
const home = async(req,res)=>{
    try {
        res.status(200).send('welcome to the routing')
    } catch (error) {
        res.status(400).send(error)
    }
    
}

//code f the index page
const register = async(req,res)=>{
    try {

        console.log(req.body);
        const {username,email,phone,address,type,password} = req.body;
        const userExist =await User.findOne({email});
        // res.status(200).send('welcome to the register')

        if (userExist){
            return res.status(400).json({message:"email are exist in the db"})
        }

        // const saltRound = 10
        // const hash_password = await bcrypt.hash(password,saltRound)
        // const userCreate=await User.create({username,email,phone,password:hash_password})

        const userCreate=await User.create({username,email,phone,address,type,password})
        res.status(201).json({
            msg:"Registration successful",
            token:await userCreate.generateToken(),
            userId:userCreate._id.toString()
        });
    } catch (error) {
        res.status(400).send(error)
        next(error);
    }
    
}

//code for the login page 
const login=async (req,res) =>{
    try {
        const {email,password} = req.body
        const userExist = await User.findOne({email})

        if (!userExist){
            return res.status(400).json({message:"invalid credintials"})
        }

        // const user = await bcrypt.compare(password,userExist.password)
        const user = await userExist.compairePassword(password)

        if(user){
            res.status(200).json({
                msg:"Login successful",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            });
        }
        else{
            res.status(401).json({msg:"inbvalid email and password"})
        }
    } catch (error) {
        
        res.status(400).json({msg:"internal server error"})
    }
}

const user = (req,res)=>{
    try {
        const userData = req.user
        console.log(userData);
        return res.status(200).json({userData})
    } catch (error) {
        console.log(`error fron getting user data ${error}`);
    }
}

module.exports = {home,register,login ,user}