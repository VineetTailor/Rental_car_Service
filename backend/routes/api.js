import express from 'express';

import { getcardetails, addcardetails, deletecardetails, getindividualcardetails } from '../controllers/cardetailcontroller.js';
import { addtestimonials, deletetestimonials, gettestimonials } from '../controllers/testimonialscontroller.js';
import { adduserdetails, deleteuserdata, getuserdetails } from '../controllers/userdetailscontroller.js';




const router = express.Router();

// api for car details

router.get('/car-details',getcardetails)

router.get('/car-details/:id' , getindividualcardetails)

router.post('/car-details', addcardetails)

router.delete('/car-details/:id', deletecardetails)


// api for testimonial

router.get('/testimonial', gettestimonials)

router.post('/testimonial', addtestimonials)

router.delete('/testimonial/:id', deletetestimonials)

//user-details

router.get('/user-details', getuserdetails)

router.post('/user-details', adduserdetails)

router.delete('/user-details/:id', deleteuserdata)




export default router;