// import React, { useState } from 'react'


// const Razorpay = () => {

//     const [amount, setamout] = useState('')
//     const handelsubmit = (e) =>{
//         e.preventDefault()
//         if(amount === "")
//         alert("please enter amount")
//         else{
//             var options = {
//                 key: "rzp_test_vqSbStE8csVkyY",
//                 key_secret: "4Bn8nSrBaFnA8gcgHmJ1mzVg",
//                 amount: amount *100,
//                 currency: "INR",
//                 name: "Rahul",
//                 description: "Testing",
//                 handler : function(response){
//                     alert(response.razorpay_payment_id)
//                 },
//                 prefill: {
//                     name: "rahul",
//                     email: "rahulriyazpc@gmail.com",
//                     contact: "7708133665",
//                 },
//                 notes:{
//                     address: "Razorpay corporate office"
//                 },
//                 theme:{
//                     color:"#3399cc"
//                 }
//             };
//             var pay = new window.Razorpay(options);
//             pay.open();
//         } 
        
//     }
//     return (
//         <div>
//             <h1>Payment</h1>
//             <input type="text" placeholder='enter amount' value={amount} 
//             onChange={(e)=> setamout(e.target.value)}
//             ></input><br/>
//             <button onClick={handelsubmit}>Submit</button>
//         </div>
//     )
// }

// export default Razorpay
