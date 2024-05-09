import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function WebApplicationsCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="services-card-p">
            <b>Exclusive talent pool</b> – We`re lucky to have some of the best recruiters in our space, offering years of experience in the North American, Asian and European markets. They offer a network of the best Engineers, Developers, Consultants and C-level profiles across the world.

            <br />
            <br />

            <b>Communication</b> – We get to know each candidate to ensure they compliment your company culture and criteria for the role. We’re here from the initial interview to the offer stage and beyond, with continued guidance and assistance throughout the process.

            <br />
            <br />

            <b>Mantra</b> – Our aim is to make your hiring process simple, freeing up time to work on the projects you’re truly passionate about. An open-door policy 24/7, if you’re working, we’re working.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "#2e6060" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WebApplicationsCard;
