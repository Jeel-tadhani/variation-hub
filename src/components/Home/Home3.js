
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import iotDevelopment from "../../Assets/Projects/iot-development.jpg";
import mobileApplication from "../../Assets/Projects/mobile-application.png";
import website from "../../Assets/Projects/website-development.jpg";

function Home3() {
  return (
    <Container fluid id="about">
      <Container>
        <h1 className="project-heading">
          PROJECTS
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={website}
              isBlog={false}
              className="img-card"
              title="Web Application"
              description="Elevate your online presence with our cutting-edge web application services. We design responsive, user-friendly interfaces that seamlessly integrate with the latest technologies. Experience enhanced functionality, scalability, and a visually appealing digital platform that engages and captivates your audience."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotDevelopment}
              isBlog={false}
              className="img-card"
              title="IoT Application"
              description="Embrace the future with our comprehensive IoT services. We empower your business by connecting devices, extracting valuable insights, and optimizing processes. From smart homes to industrial solutions, our IoT expertise ensures seamless connectivity, real-time data analysis, and innovative solutions to propel your business forward."
              // demoLink="https://blogs.soumya-jit.tech/"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileApplication}
              isBlog={false}
              className="img-card"
              title="Mobile Application"
              description="Revolutionize your reach with our mobile application services. We craft intuitive, high-performance apps that resonate with your audience. Whether iOS or Android, our mobile solutions blend aesthetics with functionality, providing a delightful user experience. Stay ahead in the mobile landscape, harnessing the power of innovation for your business success."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
