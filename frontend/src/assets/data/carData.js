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
    rating: 5,
    carName: "Maruti Suzuki Swift",
    imgUrl: img01,
    model: "Model 3",
    price: 5000,
    speed: "1190CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: "The Maruti Suzuki Swift is known for its sporty and aerodynamic design, making it visually appealing. Its compact size makes it ideal for urban driving. The Swift is known for its peppy performance and excellent fuel efficiency. It typically comes with both petrol and diesel engine options.",
  },

  {
    id: 2,
    brand: "Hyundai",
    rating: 4,
    carName: "Hyundai Grand i10 Nios",
    imgUrl: img02,
    model: "Model-2022",
    price: 5000,
    speed: "1197CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "With a choice of petrol and diesel engines, the Grand i10 Nios delivers a good balance of performance and fuel efficiency. It is well-suited for both city commutes and highway drives.Hyundai is known for offering a host of features, and the Nios is no exception. Depending on the variant, it may come with features such as a touchscreen infotainment system, rearview camera, wireless charging, and more..",
  },

  {
    id: 3,
    brand: "Tata",
    rating: 132,
    carName: "Tata Tiago",
    imgUrl: img03,
    model: "Model-2022",
    price: 4500,
    speed: "1100CC",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Tata Tiago stands out with its stylish design and compact dimensions. It features Tata's Impact Design Philosophy, giving it a modern and attractive appearance.The Tiago is equipped with safety features such as dual airbags, ABS with EBD, and corner stability control. This focus on safety is noteworthy in its segment.",
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
