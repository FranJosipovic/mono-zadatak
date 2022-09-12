import React from "react";
import { Modal, Button } from "react-bootstrap";
import { observer } from "mobx-react";

export default observer(function CarMakeModal({
  modalShow,
  setModalShow,
  carMakeStore,
}) {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Car Make List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carMakeStore.carMakeList.map((carMake) => {
          return (
            <div
              className="border border-primary rounded p-1 mt-2 align-items-center justify-content-between d-flex"
              key={carMake.id}
            >
              <div>{carMake.name}</div>
              <div style={{ marginRight: "10px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    carMakeStore.deleteCarMake(carMake.id);
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
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
});
