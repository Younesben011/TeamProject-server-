import mongoose, { Schema } from "mongoose"
import mongodb, { ObjectId } from "mongodb"
import isEmail from "validator/lib/isEmail.js"

const AddressSchema= new mongoose.Schema({
    country:String,
    postalCode:Number,
    state:String,
    city:String,

})

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"pleas Enter a userName"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"pleas Enter a password"],
        minlength:[8,"minimum password length is 8"],
    },
    email:{
        type:String,
        required:[true,"pleas Enter an email"],
        unique:true,
        lowercase:true,
        validate:[isEmail,]
    },
    phoneNumber:{
        type:Number,   
    },
    profilePicture:{
        type:String,
        default:""
    },
    bio:{
        type:String,
        default:""
    },
    address:{
        type:AddressSchema,
    },
    acountState:{
        type:String,
        default:"Active"
    },
    userType:{
        type:String,
        default:"seller"
    },
    workImages:{
        type:[String],
        default:[]
    }
})

const User = new mongoose.model("User",UserSchema)
export default User