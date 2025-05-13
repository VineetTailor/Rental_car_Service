// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Maruti Suzuki",
    carName: "Maruti Suzuki Swift",
    imgUrl: img01,
    model: 2019,
    price: 5000,
    speed: 120,
    mileage: 20,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.5,
    description: "The Maruti Suzuki Swift is known for its sporty and aerodynamic design, making it visually appealing. Its compact size makes it ideal for urban driving. The Swift is known for its peppy performance and excellent fuel efficiency. It typically comes with both petrol and diesel engine options.",
  },
  {
    id: 2,
    brand: "Toyota",
    carName: "Toyota Camry",
    imgUrl: img02,
    model: 2020,
    price: 7000,
    speed: 150,
    mileage: 18,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.7,
    description: "The Toyota Camry is a premium sedan known for its comfort and reliability. It offers a spacious interior, smooth ride quality, and advanced safety features. The Camry is perfect for both city driving and long journeys.",
  },
  {
    id: 3,
    brand: "BMW",
    carName: "BMW 3 Series",
    imgUrl: img03,
    model: 2021,
    price: 9000,
    speed: 180,
    mileage: 15,
    transmission: "Automatic",
    gpsNavigation: true,
    heatedSeats: true,
    ratings: 4.9,
    description: "The BMW 3 Series is a luxury sports sedan that combines performance with elegance. It features powerful engine options, precise handling, and premium interior materials. The car comes with advanced technology features and driver assistance systems.",
  },
  {
    id: 4,
    brand: "Ford",
    rating: 5,
    carName: "Ford EcoSport",
    imgUrl: img04,
    model: "Model-2022",
    price: 7000,
    speed: "1200CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Ford EcoSport is known for its robust build quality, making it suitable for those who appreciate a sturdy and reliable vehicle.Ford is renowned for producing cars with engaging driving dynamics, and the EcoSport is no exception. It offers a fun and confident driving experience.",
  },
  {
    id: 5,
    brand: "Mahindra",
    rating: 94,
    carName: "Mahindra Bolero",
    imgUrl: img05,
    model: "Model-2022",
    price: 4500,
    speed: "1000CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Mahindra Bolero is known for its robust and rugged design, making it a popular choice, especially in rural and semi-urban areas. It is designed to tackle rough terrains with ease.The Bolero offers a spacious cabin with a focus on practicality. The rear seats are often designed for comfort, and the vehicle is capable of accommodating a larger number of passengers.",
  },
  {
    id: 6,
    brand: "Volkswagen",
    rating: 5,
    carName: "Volkswagen Polo",
    imgUrl: img06,
    model: "Model-2022",
    price: 8000,
    speed: "1200CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Volkswagen is known for its superior build quality, and the Polo is a testament to that. It offers a solid and sturdy build, providing a sense of safety and durability.The Polo is appreciated for its excellent driving dynamics, offering a balanced and responsive driving experience. It's often considered by enthusiasts for its handling and performance.",
  },
  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "1200CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Audi is known for its superior build quality, and the Polo is a testament to that. It offers a solid and sturdy build, providing a sense of safety and durability.The Polo is appreciated for its excellent driving dynamics, offering a balanced and responsive driving experience. It's often considered by enthusiasts for its handling and performance. ",
  },
  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Audi Fiesta",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "1200CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Audi is known for its superior build quality, and the Polo is a testament to that. It offers a solid and sturdy build, providing a sense of safety and durability.The Polo is appreciated for its excellent driving dynamics, offering a balanced and responsive driving experience. It's often considered by enthusiasts for its handling and performance. ",
  },
];

export default carData;
