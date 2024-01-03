import React from "react";
import {  Row, Col } from "reactstrap";
import "../styles/admin.css";
// import Razorpay from "../components/Payment/Razorpay";



const AdminPanel = () => {
  return (
    <section>
      {/* <Razorpay/> */}
      {/* <h1>admin</h1> */}
      <Row>
        <Col lg='2' md="2" sm="4" className="left-col">
          <div className="left-col-title"><p>Add Cars</p></div>
         
        </Col>
        <Col  lg='10' md="10" sm="12" className="right-col">
          <div className="right-col1"></div>
        </Col>
      </Row>
    </section>
  );
};

export default AdminPanel;
