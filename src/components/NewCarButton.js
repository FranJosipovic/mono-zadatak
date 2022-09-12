import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NewCarButton() {
  const navigate = useNavigate();

  function goToCreatePage() {
    navigate("/create");
  }

  return (
    <Button
      variant="outline-primary mt-2"
      onClick={() => {
        goToCreatePage();
      }}
    >
      Add New Car
    </Button>
  );
}
