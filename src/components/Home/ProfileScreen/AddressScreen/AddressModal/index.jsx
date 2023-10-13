import React from "react";
import Modal from "react-bootstrap/Modal";
import "./AddressModal.css";

const AddressModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <button className="modal-button" onClick={handleClose}>
          Close
        </button>
        <button className="modal-button" onClick={handleClose}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddressModal;
