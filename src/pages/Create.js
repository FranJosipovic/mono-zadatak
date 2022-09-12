import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import ToastComponent from "../components/ToastComponent";
import CarMakeModal from "../components/modals/CarMakeModal";

export default observer(function Create({ carModelStore, carMakeStore }) {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const carMakeId = useRef();
  const carModelName = useRef();
  const carModelAbrv = useRef();

  const carMakeName = useRef();
  const carMakeAbrv = useRef();

  const createCarModel = () => {
    if (
      carMakeId.current.value === "null" ||
      carModelName.current.value === "" ||
      carModelAbrv.current.value === ""
    ) {
      setShow(true);
      setType({
        style: "danger",
        title: "Error creating car model",
        message: "no make type or model name and abrv",
      });
      return;
    }
    carModelStore.createCarModel(
      carModelName.current.value,
      carModelAbrv.current.value,
      carMakeId.current.value
    );
    setShow(true);
    setType({
      style: "success",
      title: "Success",
      message: "Car model added successfully",
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1500);
  };

  const createCarMake = () => {
    if (carMakeAbrv.current.value === "" || carMakeName.current.value === "") {
      setShow(true);
      setType({
        style: "danger",
        title: "Error creating car make",
        message: "no name and abrv",
      });
      return;
    }
    carMakeStore.createCarMake(
      carMakeName.current.value,
      carMakeAbrv.current.value
    );
    setShow(true);
    setType({
      style: "success",
      title: "Success",
      message: "Car make added successfully",
    });
    carMakeName.current.value = "";
    carMakeAbrv.current.value = "";
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-light"
        style={{ height: "100vh", width: "100vw", position: "relative" }}
      >
        <Form
          className="w-75 bg-light"
          style={{ height: "100%", position: "relative" }}
        >
          <Form.Group className="p-4 w-75 mx-auto">
            <h4 className="text-center mt-2">New Car Model</h4>
            <Form.Label>Name</Form.Label>
            <Form.Control ref={carModelName} type="text" required />
            <Form.Label className="mt-2">Abrv</Form.Label>
            <Form.Control ref={carModelAbrv} type="text" />
            <Form.Label className="mt-2" required>
              Car make
            </Form.Label>
            <div className="d-flex" style={{ gap: "10px" }}>
              <Form.Select
                style={{ width: "80%" }}
                defaultValue={null}
                ref={carMakeId}
                onChange={(e) => console.log(carMakeId.current.value)}
                required
              >
                <option value="null">select</option>
                {carMakeStore.carMakeList.map((carMake) => {
                  return (
                    <option key={carMake.id} value={carMake.id}>
                      {carMake.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Button
                style={{ width: "20%" }}
                variant="outline-primary"
                onClick={() => {
                  setModalShow(true);
                }}
              >
                Edit list
              </Button>
            </div>
          </Form.Group>
          <Button
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={() => {
              createCarModel();
            }}
          >
            Submit New Car
          </Button>
          <Form.Group className="p-4 w-75 mt-5 mx-auto">
            <h4 className="text-center">New Car Make</h4>
            <Form.Label>Name</Form.Label>
            <Form.Control ref={carMakeName} type="text" required />
            <Form.Label className="mt-2">Abrv</Form.Label>
            <Form.Control ref={carMakeAbrv} type="text" required />
          </Form.Group>
          <Button
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={() => {
              createCarMake();
            }}
          >
            Submit New Car Make
          </Button>
        </Form>
        <Button
          variant="outline-primary"
          onClick={() => {
            navigate("/");
          }}
          style={{ top: "10px", right: "10px", position: "absolute" }}
        >
          X
        </Button>
        <ToastComponent type={type} show={show} setShow={setShow} />
      </div>
      <CarMakeModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        carMakeStore={carMakeStore}
      />
    </>
  );
});
