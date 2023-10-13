import React from "react";
import Modal from "react-bootstrap/Modal";
import "./AddressModal.css";
import Input from "../../../../Input";

const AddressModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">Add an address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-bodyContainer">
          <div className="modal-flexContainer">
            <Input label="Name" />
            <Input label="Phone number" />
          </div>
          <div className="modal-flexContainer">
            <Input label="Street" />
            <Input label="City" />
          </div>
          <div className="modal-flexContainer">
            <Input label="State" />
            <Input label="Pincode" />
          </div>
          <div className="modal-buttonsContainer">
            <button className="modal-button" onClick={handleClose}>
              Close
            </button>
            <button className="modal-button" onClick={handleClose}>
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );
};

export default AddressModal;
