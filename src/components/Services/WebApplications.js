import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import laptopImg from "../../Assets/about.png";
import app from "../../Assets/app.png";
import WebApplicatonsCard from "./WebApplicatoinsCard";
// import Toolstack from "./Toolstack";
import Techstack from "./Techstack";

function WebApplications() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ maxWidth: "100%", justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <strong style={{ display: "flex", textTransform: "uppercase", textAlign: "left", width: "100%", maxWidth: "180px", fontSize: "3.5em", paddingBottom: "20px" }}>
              Web Applications
            </strong>
            <hr style={{ borderBottom: "2px solid " }} />
            <WebApplicatonsCard />
          </Col>
          <Col></Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px", height: "500px", width: "550px" }}
            className="about-img"
          >
            <img src={app} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        {/* 
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default WebApplications;
