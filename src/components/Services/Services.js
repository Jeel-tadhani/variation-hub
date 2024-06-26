import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCards from "./ServicesCard";
// import Particle from "../Particle";
import iotDevelopment from "../../Assets/Projects/iot-development.jpg";
import mobileApplication from "../../Assets/Projects/mobile-application.png";
import website from "../../Assets/Projects/website-development.jpg";

function Services() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          OUR SERVICES
        </h1>

        <p className="p-body">
          Here are a few services I've worked on recently.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ServicesCards
              imgPath={website}
              isBlog={false}
              title="Web Services"
              description="Elevate your online presence with our cutting-edge web application services. We design responsive, user-friendly interfaces that seamlessly integrate with the latest technologies. Experience enhanced functionality, scalability, and a visually appealing digital platform that engages and captivates your audience."
              rdLink="/web-services"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCards
              imgPath={mobileApplication}
              isBlog={false}
              title="App Services"
              description="Revolutionize your reach with our mobile application services. We craft intuitive, high-performance apps that resonate with your audience. Whether iOS or Android, our mobile solutions blend aesthetics with functionality, providing a delightful user experience. Stay ahead in the mobile landscape, harnessing the power of innovation for your business success."
              rdLink="/app-services"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ServicesCards
              imgPath={iotDevelopment}
              isBlog={false}
              title="Blockchain Services"
              description="At VariationHub, we specialize in providing cutting-edge blockchain solutions tailored to meet the unique needs of businesses across various industries. Leveraging the power of blockchain technology, we offer a range of services designed to enhance efficiency, security, and transparency in your operations. Our team of experienced developers is skilled..."
              rdLink="/blockchain-services"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Services;
