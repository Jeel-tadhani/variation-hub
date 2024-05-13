import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../Assets/vh-name-logo.png";
import { Link } from "react-router-dom";
import favicon from "../Assets/vh-favicon.png";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="3" className="footer-logo">
          <div className="footer-description">

            <a href="/" className="d-flex logo">
              <img src={favicon} className="img-fluid favicon-footer" alt="brand" />
            </a>

            <a href="/" className="d-flex logo">
              <img src={logo} className="img-fluid logo-footer" alt="brand" />
            </a>
          </div>

          <div>
            <p className="p-footer">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncove</p>
          </div>
        </Col>

        <Col md="3" className="footer-copywright footer-header links-services">
          <div className="footer-body quick-links">
            <strong className="title">Quick Links</strong>
            <Link className="body-data" as={Link} to="/">Home</Link>
            <Link className="body-data" as={Link} to="/our-services">Services</Link>
            <Link className="body-data" as={Link} to="/project">Projects</Link>
            <Link className="body-data" as={Link} to="/about">About</Link>
            <Link className="body-data" as={Link} to="/contact-us">ContactUs</Link>
          </div>
          <div className="footer-body">
            <strong className="title">Our Services</strong>
            <Link className="body-data" as={Link} to="/web-services">Web Services</Link>
            <Link className="body-data" as={Link} to="/app-services">App Services</Link>
            <Link className="body-data" as={Link} to="/blockchain-services">Blockchain Services</Link>
            {/* <Link className="body-data" as={Link} to="/about">About</Link> */}
            {/* <Link className="body-data" as={Link} to="/contact-us">ContactUs</Link> */}
          </div>
        </Col>

        <Col md="3" className="footer-copywright footer-header">
          <strong className="title">Contact Us</strong>
          <div className="body-data">
            <a style={{ fontFamily: "math" }} href="tel:9773203735">+91 9773203735</a>
            <br />
            <a style={{ fontFamily: "math" }} href="mailto:service@variationhub.com" >service@variationhub.com</a>
            <br />
            <a style={{ fontFamily: "math", textAlign: "justify" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://maps.app.goo.gl/jvdi5XNyd6vqTZbp9?g_st=iw">
              105, Dhara Arcade, Mota Varachha, Surat, Gujarat - 394101.
            </a>
          </div>

        </Col>

        <Col md="3" className="footer-header">
          <strong className="title">Social Media</strong>
          <ul className="footer-icons">
            <div className="footer-body f-icons">
              <li className="social-icons">
                <a
                  href="/"
                  className="footer-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://wa.me/9773203735"
                  className="footer-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/variation-hub/"
                  className="footer-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="/"
                  className="footer-svg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </div>

          </ul>
        </Col>
      </Row>
      <p className="p-footer end-footer">© Copyright 2023 Variation Hub. All rights reserved</p>
    </Container>
  );
}

export default Footer;
