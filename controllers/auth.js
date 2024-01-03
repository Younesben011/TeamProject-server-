import User from "../models/User.js"
import bcrypt, { compareSync } from "bcrypt"

// register 

const errorHandller = (err)=>{
    console.log(err);
}


export const register = async(req,res)=>{

    try {
        const {
            username,
            password,
            email,
            phoneNumber,
            profilePicture,
            address,
            userType,
        }= req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt)
        
        const newUser = new User({
            username,
            password:passwordHash,
            email,
            phoneNumber,
            profilePicture,
            address,
            userType,
        })
        const savedUser = await newUser.save();
        res.status(201).json({status:201,user:savedUser}); /* status 201 in case that somthing is created 👌 */

    } catch (err) {
        errorHandller(err)

        // res.status(500).json({status:500,err:err.message})
    }
}


// LOGIN
export const login= async(req,res)=>{
    try {
       const {username,email,password}=req.body;
       console.log(username,password);
       if(!username&&!email){
            res.status(400).json({msg:" email or username are required"});
            return
       }        
        const user = await User.findOne(username?{username:username}:email?{email:email}:{})
        if(!user){
            res.status(400).json({msg:"user does not exist. "});
            return
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
            res.status(400).json({msg:"Wrong password. "});
            return

        }
        // const token = jwt.sign({id:user.id},process.env.JWt_SECRET)
        user.password=""
        // console.log(token)
        res.status(200).json({user});
    } catch (err) {
        res.status(500).json({error:err.message})
    }
};