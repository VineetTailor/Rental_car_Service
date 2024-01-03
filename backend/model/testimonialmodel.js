import { mongoose, Schema} from "mongoose";

const testimonialsch = new Schema({
    id:Number,
    name:String,
    type:String,
    feedback:String
},{versionKey:false})

const testimonials = mongoose.model("testimonialcol", testimonialsch);

export default testimonials