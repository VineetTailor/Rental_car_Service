import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";


import axios from 'axios';



const BookingForm = () => {
  const [data , setdata] = useState({
    firstname: '',
    lastname:'',
    email:'',
    phonenumber:'',
    fromaddress:'',
    toaddress:'',
    personopt:'',
    luggagecount:'',
    date:'',
    time:'',
    description:''
  })

  function handel(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setdata(newdata)
    console.log(newdata)
  }

  function submitHandler (event) {
    event.preventDefault()
    axios.post('https://car-webite.vercel.app/', {
      firstname: data.firstname,
      lastname:data.lastname,
      email:data.email,
      phonenumber:data.phonenumber,
      fromaddress:data.fromaddress,
      toaddress:data.toaddress,
      personopt:data.personopt,
      luggagecount:data.luggagecount,
      date:data.date,
      time:data.time,
      description:data.description
    })
    .then(response=> console.log(response))
    .catch(err => console.log(err))
    
  };

  // const [amount, setamout] = useState('')

  const handlesubmit = () =>{
   
    if( setdata === "")
    alert("please fill the form")
    else{
        var options = {
            key: "rzp_test_vqSbStE8csVkyY",
            key_secret: "4Bn8nSrBaFnA8gcgHmJ1mzVg",
            amount: 1 *100,
            currency: "INR",
            name: "Rahul",
            description: "Testing",
            handler : function(response){
                alert(response.razorpay_payment_id)
            },
            prefill: {
                name: "rahul",
                email: "rahulriyazpc@gmail.com",
                contact: "7708133665",
            },
            notes:{
                address: "Razorpay corporate office"
            },
            theme:{
                color:"#000D6B"
            }
        };
        var pay = new window.Razorpay(options);
        pay.open();
    }
   }
  
  return (
    <Form onSubmit={(e) =>submitHandler(e)}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" onChange={(e)=>handel(e)} id="firstname" value={data.firstname} placeholder="First Name" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" onChange={(e)=>handel(e)} id="lastname" value={data.lastname} placeholder="Last Name" />
      </FormGroup>

       <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" onChange={(e)=>handel(e)} id="email" value={data.email} placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" onChange={(e)=>handel(e)} id="phonenumber" value={data.phonenumber} placeholder="Phone Number" />
      </FormGroup> 

     <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" onChange={(e)=>handel(e)} id="fromaddress" value={data.fromaddress} placeholder="From Address" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text"  onChange={(e)=>handel(e)} id="toaddress" value={data.toaddress} placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="personopt"  onChange={(e)=>handel(e)} value={data.personopt}>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="luggagecount" onChange={(e)=> handel(e)} value={data.luggagecount}  >
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" id="date" onChange={(e)=> handel(e)} value={data.date}  placeholder="Journey Date" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="time" id="time" onChange={(e)=> handel(e)} value={data.time} placeholder="Journey Time" className="time__picker"/>
      </FormGroup>

{/* 
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" onChange={(e)=>handel(e)} id="description" value={data.description} placeholder="Write something" />
      </FormGroup> */}



      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" onChange={(e)=>setamout(e.target.value)} id="payment" value={amount} placeholder="Enter amount" />
      </FormGroup> */}

 
      
      
      <button className=" book" onClick={handlesubmit}>Book Now</button>
    </Form>
  );
};

export default BookingForm;
