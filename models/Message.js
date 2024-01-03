import mongoose, { Schema } from "mongoose"
import mongodb, { ObjectId } from "mongodb"
import isEmail from "validator/lib/isEmail.js"

const AddressSchema= new mongoose.Schema({
    country:String,
    postalCode:Number,
    state:String,
    city:String,

})

const MessageSchema = new mongoose.Schema({
    sender_id:{
        type:ObjectId,
        ref:"User"
    },
    reciver_id:{
        type:ObjectId,
        ref:"User"
    },
    message_content:{
        type:String,
        require:true,
    },
},{timestamps:true})

const Message = new mongoose.model("Message",MessageSchema)
export default Message