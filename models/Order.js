import mongoose, { Schema } from "mongoose"
import mongodb, { ObjectId } from "mongodb"     

const OrderSchema = new mongoose.Schema({
    buyer_id:{
        type:ObjectId,
        ref:"User"
    },
    seller_id:{
        type:ObjectId,
        ref:"User"
    },
    skill_id:{
        type:ObjectId,
        ref:"Skill"
    },
    status:{
        type:String,
        default:"In Progress"
    },
    total_amount:{
        type:Number,
    }

})

const Order = new mongoose.model("Order",OrderSchema)
export default Order