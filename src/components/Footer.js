import React, { useState } from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = useState(fasle);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <footer className="footer">
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/nirav-gusai-a4627b1a7"
            target="_blank"
          >
            Nirav Gusai
          </a>
          .
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </React.Fragment>
  );
};

export default Footer;
