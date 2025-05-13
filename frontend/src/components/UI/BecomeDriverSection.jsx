import React from "react";
import "../../styles/become-driver.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src="/images/cars-img/pexels-julian-largo-622163228-18003058.jpg" alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>

            <button className="btn become__driver-btn mt-4">
            <Link to="/contact" className="become__driver-btn">
                   Become a Driver
                </Link>
              
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
