import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
// } from "react-icons/di";
// import {
//   SiSolidity,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";
import FrontIcon from "../../Assets/Icons/Frontend-Development.svg";
import BackIcon from "../../Assets/Icons/Backend-Development.svg";
import MobileIcon from "../../Assets/Icons/Mobile-Development.svg";
import DevOpsIcon from "../../Assets/Icons/DevOps.svg";
import CloudIcon from "../../Assets/Icons/Cloud-Systems.svg";
import BlockchainIcon from "../../Assets/Icons/Blockchain.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}} container>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={FrontIcon} alt="about" className="img-fluid" />
        </div>
        <h4 style={{ margin: "35px 0px" }}>Frontend Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">React</p>
          <p className="web-languages-content">JavaScript</p>
          <p className="web-languages-content">Angular</p>
          <p className="web-languages-content">HTML</p>
          <p className="web-languages-content">CSS</p>
          <p className="web-languages-content">Redux</p>
          <p className="web-languages-content">Typescript</p>
        </div>
      </Col>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={BackIcon} alt="about" className="img-fluid" />
        </div>
        <h4 style={{ margin: "35px 0px" }}>Backend Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">Java</p>
          <p className="web-languages-content">Python</p>
          <p className="web-languages-content">PHP</p>
          <p className="web-languages-content">Rust</p>
          <p className="web-languages-content">C++</p>
          <p className="web-languages-content">C</p>
          <p className="web-languages-content">C#</p>
          <p className="web-languages-content">.NET</p>
          <p className="web-languages-content">NodeJS</p>
        </div>
      </Col>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={MobileIcon} alt="about" className="img-fluid" />
        </div>
        <h4 style={{ margin: "35px 0px" }}>Mobile Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">iOS</p>
          <p className="web-languages-content">Android</p>
        </div>
      </Col>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={DevOpsIcon} alt="about" className="img-fluid" />
        </div>
        <h4 style={{ margin: "35px 0px" }}>Frontend Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">React</p>
          <p className="web-languages-content">JavaScript</p>
          <p className="web-languages-content">Angular</p>
          <p className="web-languages-content">HTML</p>
          <p className="web-languages-content">CSS</p>
          <p className="web-languages-content">Redux</p>
          <p className="web-languages-content">Typescript</p>
        </div>
      </Col>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={CloudIcon} alt="about" className="img-fluid" />
        </div>  
        <h4 style={{ margin: "35px 0px" }}>Frontend Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">React</p>
          <p className="web-languages-content">JavaScript</p>
          <p className="web-languages-content">Angular</p>
          <p className="web-languages-content">HTML</p>
          <p className="web-languages-content">CSS</p>
          <p className="web-languages-content">Redux</p>
          <p className="web-languages-content">Typescript</p>
        </div>
      </Col>
      <Col xs={4} md={4} className="web">
        <div className="web-icons">  
        <img src={BlockchainIcon} alt="about" className="img-fluid" />
        </div>
        <h4 style={{ margin: "35px 0px" }}>Frontend Development</h4>
        <hr style={{ borderBottom: "2px solid", margin: "35px 0px", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-content">React</p>
          <p className="web-languages-content">JavaScript</p>
          <p className="web-languages-content">Angular</p>
          <p className="web-languages-content">HTML</p>
          <p className="web-languages-content">CSS</p>
          <p className="web-languages-content">Redux</p>
          <p className="web-languages-content">Typescript</p>
        </div>
      </Col>
      
      {/* <Col xs={3} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={3} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={3} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} className="tech-icons">
        <SiSolidity />
      </Col> */}
    </Row>
  );
}

export default Techstack;
