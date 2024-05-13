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
import Hidden from '@mui/material/Hidden';

function Techstack() {
  return (
    <Row className="home-techstack" container>
      <Col className="web">
        <div className="web-icons">
          <img src={FrontIcon} alt="about" className="img-fluid" />
        </div>
        <h4>Frontend Development</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">React</p>
          <p className="web-languages-line">JavaScript</p>
          <p className="web-languages-line">Angular</p>
          <p className="web-languages-without-line">HTML</p>
          <p className="web-languages-line">CSS</p>
          <p className="web-languages-line">Redux</p>
          <p className="web-languages-line">Typescript</p>
        </div>
      </Col>
      <Col className="web">
        <div className="web-icons">
          <img src={BackIcon} alt="about" className="img-fluid" />
        </div>
        <h4>Backend Development</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">Java</p>
          <p className="web-languages-line">Golang</p>
          <p className="web-languages-line">Python</p>
          <p className="web-languages-without-line">PHP</p>
          <p className="web-languages-line">C++</p>
          <p className="web-languages-line">C</p>
          <p className="web-languages-line">C#</p>
          <p className="web-languages-without-line">.NET</p>
          <p className="web-languages-line">NodeJS</p>
        </div>
      </Col>
      <Col className="web">
        <div className="web-icons">
          <img src={MobileIcon} alt="about" className="img-fluid" />
        </div>
        <h4>Mobile Development</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">iOS</p>
          <p className="web-languages-line">Android</p>
          <p className="web-languages-line">Kotlin</p>
          <p className="web-languages-without-line">Flutter</p>
          <p className="web-languages-line">React Native</p>
        </div>
      </Col>
      <Col className="web">
        <div className="web-icons">
          <img src={DevOpsIcon} alt="about" className="img-fluid" />
        </div>
        <h4>DevOps</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">Linux</p>
          <p className="web-languages-line">Kubernetes</p>
          <p className="web-languages-line">Terraform</p>
          <p className="web-languages-without-line">Jenkins</p>
          <p className="web-languages-line">Docker</p>
          <p className="web-languages-line">Azure
            <Hidden smDown max-width="767px">DevOps
            </Hidden>
          </p>
        </div>
      </Col>
      <Col className="web">
        <div className="web-icons">
          <img src={CloudIcon} alt="about" className="img-fluid" />
        </div>
        <h4>Cloud Systems</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">GPS</p>
          <p className="web-languages-line">AWS</p>
          <p className="web-languages-line">Azure</p>
          <p className="web-languages-without-line">Heroku</p>
          <p className="web-languages-line">CSS</p>
        </div>
      </Col>
      <Col className="web">
        <div className="web-icons">
          <img src={BlockchainIcon} alt="about" className="img-fluid" />
        </div>
        <h4>Blockchain</h4>
        <hr style={{ borderBottom: "2px solid", width: "100%" }} />
        <div className="web-languages">
          <p className="web-languages-line">Ethereum</p>
          <p className="web-languages-line">Contracts</p>
          <p className="web-languages-line">Solidity</p>
          <p className="web-languages-without-line">Hyperledger</p>
          <p className="web-languages-line">Solana</p>
          <p className="web-languages-line">Substrate</p>
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
