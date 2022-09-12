import { observer } from "mobx-react";
import React from "react";
import { Form } from "react-bootstrap";

export default observer(function SortComponent({ carModelStore }) {
  return (
    <Form style={{ position: "absolute", right: "10px" }}>
      <Form.Select
        onChange={(e) => {
          carModelStore.sortValue = e.target.value;
        }}
      >
        <option value="name|asc">A-Z</option>
        <option value="name|desc">Z-A</option>
      </Form.Select>
    </Form>
  );
});
