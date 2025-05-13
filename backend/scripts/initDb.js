import mongoose from 'mongoose';
import cars from '../model/cardetailmodel.js';

const carData = [
  {
    id: 1,
    brand: "Audi",
    carName: "Audi RS7 Sportback",
    imgUrl: "/images/cars-img/audi-rs7.jpg",
    model: 2023,
    price: 12000,
    speed: 305,
    mileage: 11.5,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.8,
    description: "The Audi RS7 Sportback combines luxury with incredible performance. With its 4.0L V8 twin-turbo engine, elegant design, and premium interior featuring advanced technology, it delivers an exceptional driving experience."
  },
  {
    id: 2,
    brand: "BMW",
    carName: "BMW M8 Competition",
    imgUrl: "/images/cars-img/bmw-m8.jpg",
    model: 2023,
    price: 15000,
    speed: 310,
    mileage: 10.8,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.9,
    description: "The BMW M8 Competition represents the pinnacle of BMW's luxury-performance lineup. With its powerful V8 engine, sophisticated design, and cutting-edge technology, it offers an unmatched blend of luxury and sportiness."
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    carName: "Mercedes-AMG GT 63 S",
    imgUrl: "/images/cars-img/mercedes-amg-gt.jpg",
    model: 2023,
    price: 14000,
    speed: 315,
    mileage: 11.2,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.9,
    description: "The Mercedes-AMG GT 63 S is a four-door luxury performance car that combines practicality with incredible power. Its handcrafted AMG engine, premium materials, and advanced driver assistance systems deliver an extraordinary driving experience."
  }
];

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/carbookingdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Connected to MongoDB');
  
  try {
    // Clear existing data
    await cars.deleteMany({});
    console.log('Cleared existing car data');

    // Insert new data
    await cars.insertMany(carData);
    console.log('Successfully initialized car data');
  } catch (error) {
    console.error('Error initializing data:', error);
  }
  
  // Close the connection
  await mongoose.connection.close();
  console.log('Database connection closed');
})
.catch(err => {
  console.error('Could not connect to MongoDB:', err);
}); 