# Car Rental Service Website

A modern full-stack car rental website built with React.js and Node.js, featuring a beautiful UI and comprehensive booking system.

## 🚗 Features

- **Modern UI/UX**: Clean and responsive design across all devices
- **Car Listings**: Detailed car information with high-quality images
- **Booking System**: Easy-to-use car booking functionality
- **Admin Panel**: Manage cars, bookings, and users
- **Authentication**: Secure user authentication system
- **Payment Integration**: Razorpay payment gateway integration
- **Responsive Design**: Mobile-first approach for all screen sizes

## 🛠️ Tech Stack

### Frontend
- React.js
- Bootstrap
- CSS3
- React Router DOM
- React Icons
- Reactstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
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
cd frontend
npm install
```

4. Set up environment variables
Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_uri
PORT=7000
JWT_SECRET=your_jwt_secret
```

5. Start the Backend Server
```bash
cd backend
npm start
```

6. Start the Frontend Development Server
```bash
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## 📱 Application Structure

```
├── frontend/                # React frontend
│   ├── public/             # Public assets
│   ├── src/                # Source files
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # CSS styles
│   │   └── assets/        # Images and other assets
│   └── package.json       # Frontend dependencies
│
└── backend/               # Node.js backend
    ├── models/           # MongoDB models
    ├── routes/          # API routes
    ├── controllers/     # Route controllers
    ├── middleware/      # Custom middleware
    └── package.json     # Backend dependencies
```

## 🌟 Key Features

1. **Car Management**
   - Add, edit, and delete car listings
   - Upload car images
   - Manage car availability

2. **Booking System**
   - Easy booking process
   - Date and time selection
   - Location selection
   - Price calculation

3. **User Features**
   - User registration and login
   - Booking history
   - Profile management
   - Payment processing

4. **Admin Features**
   - Dashboard with statistics
   - Manage car listings
   - View and manage bookings
   - User management

## 🔒 Security Features

- JWT Authentication
- Password Encryption
- Protected Routes
- Input Validation
- Error Handling

## 🎨 UI Features

- Responsive Design
- Interactive Components
- Loading States
- Error Handling UI
- Toast Notifications
- Form Validation

## 📝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Vineet Tailor**
- GitHub: [@VineetTailor](https://github.com/VineetTailor)

## 🙏 Acknowledgments

- Special thanks to all contributors
- Car images sourced from various providers
- UI inspiration from modern car rental websites
