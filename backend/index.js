import express from 'express';
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import carroutes from './routes/api.js'
import cors from 'cors';



mongoose.connect("mongodb://localhost:27017/carbookingdb")

const app = express()
const PORT = 7000

app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST", "PUT", "DELETE"]
}))

app.use('/', carroutes)

app.listen(PORT, ()=> {console.log(`server running on ${PORT}`)})