// import React, { useState, useEffect } from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { TextField } from "@mui/material";

function ContactForm() {

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
                    label="Email*"
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
        </form >
    );
}

export default ContactForm;
