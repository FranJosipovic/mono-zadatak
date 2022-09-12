import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { observer } from "mobx-react";
import CarModelModal from "../components/modals/CarModelModal";

export default observer(function CarModelCard({
  car,
  make,
  carModelStore,
  carMakeStore,
}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card style={{ width: "100%", height: "10%" }} className="mt-2">
        <Card.Body className="d-flex justify-content-between align-items-center p-2">
          <div>
            <p className="m-0">Model Name: {car.name}</p>
            <p className="m-0">Car Make: {make.makeName}</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              onClick={() => {
                setModalShow(true);
              }}
              className="mx-3"
              viewBox="0 0 20 20"
              fill="blue"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                carModelStore.deleteCarModel(car.id);
              }}
              style={{ width: "25px", height: "25px", cursor: "pointer" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ff0000"
              strokeWidth={2}
              className="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </Card.Body>
      </Card>
      <CarModelModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        carModelStore={carModelStore}
        carMakeStore={carMakeStore}
        make={make}
        car={car}
      />
    </>
  );
});
