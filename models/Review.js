import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema(
    {
        user_id:{
            type:ObjectId,
            ref:"User"
        },
        rating:{
            type:Number,
        },
    },{timestamps:true}
)
const Review = mongoose.model("Review",ReviewSchema)
export default Review