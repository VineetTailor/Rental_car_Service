# Car Rental Service Website

A modern full-stack car rental website built with React.js and Node.js, featuring a beautiful UI and comprehensive booking system.

---

## 🚗 Features

- Modern, responsive UI/UX
- Car listings with detailed info and images
- Booking system with date, time, and location selection
- Admin panel for managing cars, bookings, and users
- Secure authentication (JWT)
- Payment integration (Razorpay)
- Mobile-first design

---

## 🛠️ Tech Stack

**Frontend:** React.js, Bootstrap, CSS3, React Router DOM, React Icons, Reactstrap

**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/VineetTailor/Rental_car_Service.git
   cd Rental_car_Service
   ```
2. Install Backend Dependencies
   ```bash
   cd backend
   npm install
   ```
3. Install Frontend Dependencies
   ```bash
   cd ../frontend
   npm install
   ```
4. Set up environment variables in `backend/.env`:
   ```env
   MONGODB_URI=your_mongodb_uri
   PORT=7000
   JWT_SECRET=your_jwt_secret
   ```
5. Start Backend
   ```bash
   cd ../backend
   npm start
   ```
6. Start Frontend
   ```bash
   cd ../frontend
   npm start
   ```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
backend/
  controllers/
  model/
  routes/
  scripts/
  index.js
  package.json
frontend/
  public/
  src/
    assets/
    components/
    pages/
    routers/
    styles/
  package.json
```

---

## 🌟 Key Features

- Car management (add/edit/delete, images, availability)
- Booking system (date/time/location, price calculation)
- User features (register/login, booking history, profile, payments)
- Admin dashboard (stats, manage cars/bookings/users)
- Security (JWT, password encryption, validation)
- UI (responsive, interactive, loading/error states, toast notifications)

---

## 📝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT License

## 👤 Author

[Vineet Tailor](https://github.com/VineetTailor)

---

## 🙏 Acknowledgments

- All contributors
- Image sources: Unsplash, Pexels, etc.
- UI inspiration from modern car rental platforms
