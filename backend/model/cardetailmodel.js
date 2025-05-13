import { mongoose, Schema } from "mongoose";

const cardetails = new Schema({
    id: Number,
    brand: String,
    carName: String,
    imgUrl: String,
    model: Number,
    price: Number,
    speed: Number,
    mileage: Number,
    transmission: String,
    gpsNavigation: Boolean,
    heatedSeats: Boolean,
    ratings: Number,
    description: String
}, { versionKey: false });

const cardetail = mongoose.model("carcol", cardetails);

export default cardetail;


// {
//     id: 1,
//     brand: "Maruti Suzuki",
//     rating: 5,
//     carName: "Maruti Suzuki Swift",
//     imgUrl: img01,
//     model: "Model 3",
//     price: 5000,
//     speed: "1190CC",
//     gps: "GPS Navigation",
//     seatType: "Heated seats",
//     automatic: "Automatic",
//     description: "The Maruti Suzuki Swift is known for its sporty and aerodynamic design, making it visually appealing. Its compact size makes it ideal for urban driving. The Swift is known for its peppy performance and excellent fuel efficiency. It typically comes with both petrol and diesel engine options.",
//   },