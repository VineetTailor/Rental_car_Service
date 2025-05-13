import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import Gpay from "../Payment/Gpay";
import axios from 'axios';

const BookingForm = () => {
  const [data, setdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    fromaddress: '',
    toaddress: '',
    personopt: '',
    luggagecount: '',
    date: '',
    time: '',
    description: ''
  });

  function handel(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setdata(newdata)
    console.log(newdata)
  }

  function submitHandler(event) {
    event.preventDefault()
    axios.post('http://localhost:7000/user-details', {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phonenumber: data.phonenumber,
      fromaddress: data.fromaddress,
      toaddress: data.toaddress,
      personopt: data.personopt,
      luggagecount: data.luggagecount,
      date: data.date,
      time: data.time,
      description: data.description
    })
    .then(response => {
      console.log(response);
      alert('Booking submitted successfully!');
    })
    .catch(err => {
      console.log(err);
      alert('Error submitting booking. Please try again.');
    });
  }

  const handlesubmit = () => {
    if (data.firstname === "" || data.email === "" || data.phonenumber === "") {
      alert("Please fill in the required fields");
    } else {
      var options = {
        key: "rzp_test_vqSbStE8csVkyY",
        key_secret: "4Bn8nSrBaFnA8gcgHmJ1mzVg",
        amount: 1 * 100,
        currency: "INR",
        name: data.firstname,
        description: "Car Rental Payment",
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
          submitHandler({ preventDefault: () => {} }); // Submit the form after successful payment
        },
        prefill: {
          name: data.firstname,
          email: data.email,
          contact: data.phonenumber,
        },
        notes: {
          address: "Car Rental Service"
        },
        theme: {
          color: "#000D6B"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" onChange={(e) => handel(e)} id="firstname" value={data.firstname} placeholder="First Name" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" onChange={(e) => handel(e)} id="lastname" value={data.lastname} placeholder="Last Name" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" onChange={(e) => handel(e)} id="email" value={data.email} placeholder="Email" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" onChange={(e) => handel(e)} id="phonenumber" value={data.phonenumber} placeholder="Phone Number" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" onChange={(e) => handel(e)} id="fromaddress" value={data.fromaddress} placeholder="From Address" required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" onChange={(e) => handel(e)} id="toaddress" value={data.toaddress} placeholder="To Address" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select onChange={(e) => handel(e)} id="personopt" value={data.personopt} required>
          <option value="">Select Person</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
          <option value="5+">5+ Persons</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" onChange={(e) => handel(e)} id="luggagecount" value={data.luggagecount} placeholder="Luggage Count" required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" onChange={(e) => handel(e)} id="date" value={data.date} required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="time" onChange={(e) => handel(e)} id="time" value={data.time} required />
      </FormGroup>

      <Gpay />
      
      <button type="button" className="book" onClick={handlesubmit}>Book Now</button>
    </Form>
  );
};

export default BookingForm;
