import React from "react";
// import masterCard from "../../assets/all-images/master-card.jpg";
// import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";
import { useState } from "react";

// import Gpay from "../Payment/Gpay";


const PaymentMethod = () => {

  const [disable, Setdisable] = useState(false)

  const handelChange =(e)=>{
    
    
    const target = e.target;
    if (target.checked) {
      Setdisable(target.value);
    }
    
   
  }

  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" value="Direct Bank Transfer" checked={disable === "Direct Bank Transfer"} onChange={handelChange}/> Direct Bank Transfer
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" value="Gpay" checked={disable === "Gpay"} onChange={handelChange}/> Gpay
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" value="Phonepe" checked={disable === "Phonepe"} onChange={handelChange}/> Phonepe
        </label>

        <img src='' alt="" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" value="Paytm" checked={disable === "Paytm"} onChange={handelChange} /> Paytm
        </label>
        {/* {mastercard} */}
        <img src='' alt="" />
      </div>
        {/* text-end */}
        
       
      

      <div className="payment mt-5">
      {/* <Gpay/> */}
        {/* <button>
       Book Now
        </button> */}
      
      </div>


    </>
  );
};

export default PaymentMethod;
