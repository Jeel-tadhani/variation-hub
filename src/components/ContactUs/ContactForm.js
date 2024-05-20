// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { TextField } from "@mui/material";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ContactForm() {
    const navigate = useNavigate()

    return (
        <form className="form" >
            <div className="name">
                <TextField
                    className="first-name"
                    id="outlined-basic"
                    label="First Name*"
                    variant="outlined"
                    size="small"
                />

                <TextField
                    className="last-name"
                    id="outlined-basic"
                    label="Last Name*"
                    variant="outlined"
                    size="small"
                />
            </div>

            <div className="name">
                <TextField
                    className="first-name"
                    id="outlined-basic"
                    label="Email Address*"
                    variant="outlined"
                    size="small"
                />

                <TextField
                    className="last-name"
                    id="outlined-basic"
                    label="Mobile No."
                    variant="outlined"
                    size="small"
                />

            </div>
            <div>
                <Button style={{marginTop: "2vw"}} variant="primary" onClick={() => { navigate('') }}>
                    Submit
                </Button>
            </div>
            <div className="form-footer">
                <p>OR
                    <br />
                    Reach out to us at Variation Hub Private Limited,
                    <br />
                    105, Dhara Arcade, Mota Varachha, Surat, Gujarat - 394101.
                    <br />
                    Email:  <a className="form-footer-email" href="mailto:service@variationhub.com" >service@variationhub.com</a>
                </p>
            </div>
        </form >
    );
}

export default ContactForm;
