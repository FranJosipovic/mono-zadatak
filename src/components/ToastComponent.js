import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function ToastComponent({ type, show, setShow }) {
  return (
    <ToastContainer
      style={{ position: "absolute", top: "10px", right: "10px" }}
    >
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        bg={type.style}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{type.title}</strong>
        </Toast.Header>
        <Toast.Body>{type.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
