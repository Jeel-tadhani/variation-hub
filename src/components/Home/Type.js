import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "EMPOWERING YOUR DIGITAL FUTURE  WITH EXCEPTIONAL IT SERVICES  EDUCATION",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
