import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./refer.css";
import Header from "../header/header";
import Table from "../table/table";
import Footer from "../footer/footer";

const ReferAndEarn = () => {
  return (
    <>
      <Header />
      <Container className="refer-and-earn-container">
        <Row className="refer-and-earn-box">
          <Col md={8} className="image-container">
            <img
              src="https://t4.ftcdn.net/jpg/04/90/93/03/360_F_490930345_3ToZEj1ijJolIiC0LAsOSrjsxCiHUhzP.jpg"
              alt="Refer and Earn"
              className="refer-image img-fluid"
            />
          </Col>
          <Col
            md={4}
            className="button-container d-flex align-items-center justify-content-center mt-3 mt-md-0"
          >
            <Button variant="primary" className="refer-button">
              Refer Now
            </Button>
          </Col>
        </Row>
      </Container>

      <Table />

      <Container className="button mt-4">
        <Button>Refer Now</Button>
      </Container>

      <Footer />
    </>
  );
};

export default ReferAndEarn;
