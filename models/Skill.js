import mongoose from "mongoose";

const SkillSchema = mongoose.Schema(
    {
        user_id:{
            type:ObjectId,
            ref:"User"
        },
        category_id:{
            type:ObjectId,
            ref:"Category"
        },
        certifications:{
            type:[String],
            default:[]
        },
        years_of_experience:{
            type:Number,
        },
        availability:{
            type:String,
        },
        price_range_min:{
            type:String,
        },
        price_range_max:{
            type:String,
        }
    }
)
const Skill = mongoose.model("Skill",SkillSchema)
export default Skill