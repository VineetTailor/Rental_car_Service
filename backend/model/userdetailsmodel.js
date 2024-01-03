import { mongoose, Schema} from "mongoose";

const userdetailsch = new Schema({

    firstname:String,
    lastname:String,
    email:String,
    phonenumber:Number,
    fromaddress:String,
    toaddress:String,
    personopt: String,
    luggagecount: String,
    date: String,
    time:String,
    description:String
    
},{versionKey:false})

const userdetails = mongoose.model("userdetailscol", userdetailsch);

export default userdetails