import express from 'express';
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import carroutes from './routes/api.js'
import cors from 'cors';

// Connect to local MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/carbookingdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Could not connect to MongoDB:', err);
});

const app = express()
const PORT = 7000

app.use(bodyParser.json())

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use('/', carroutes)

// Only start server if MongoDB connects successfully
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
