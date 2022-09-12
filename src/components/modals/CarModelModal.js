import React, { useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { observer } from "mobx-react";

export default observer(function CarMakeModal({
  modalShow,
  setModalShow,
  carModelStore,
  car,
  carMakeStore,
  make,
}) {
  const newCarModelName = useRef();
  const newCarModelAbrv = useRef();
  const newCarModelMakeId = useRef();

  const carMakeName = useRef();
  const carMakeAbrv = useRef();

  const createCarMake = () => {
    if (carMakeAbrv.current.value === "" || carMakeName.current.value === "")
      return;
    carMakeStore.createCarMake(
      carMakeName.current.value,
      carMakeAbrv.current.value
    );
    carMakeName.current.value = "";
    carMakeAbrv.current.value = "";
  };

  const handleSaveChanges = () => {
    carModelStore.updateCarModel(
      car.id,
      newCarModelName.current.value,
      newCarModelAbrv.current.value,
      newCarModelMakeId.current.value
    );
    setModalShow(false);
  };

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
          Edit Car Model
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={car.name}
              placeholder={car.name}
              ref={newCarModelName}
            />
            <Form.Label className="mt-2">Abrv</Form.Label>
            <Form.Control
              type="text"
              defaultValue={car.abrv}
              placeholder={car.abrv}
              ref={newCarModelAbrv}
            />
            <Form.Label className="mt-2" required>
              Car make
            </Form.Label>
            <Form.Select
              ref={newCarModelMakeId}
              defaultValue={make.makeId}
              required
            >
              <option value={make.makeId}>{make.makeName}</option>
              {carMakeStore.carMakeList.map((carMake) => {
                if (carMake.id === make.makeId) return null;
                return (
                  <option key={carMake.id} value={carMake.id}>
                    {carMake.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <h4 className="text-center">New Car Make</h4>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required ref={carMakeName} />
            <Form.Label className="mt-2">Abrv</Form.Label>
            <Form.Control type="text" required ref={carMakeAbrv} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            createCarMake();
          }}
          variant="outline-primary"
        >
          Submit New Car Make
        </Button>
        <Button
          onClick={() => {
            handleSaveChanges();
          }}
        >
          Save Changes
        </Button>
        <Button variant="secondary" onClick={() => setModalShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
});
