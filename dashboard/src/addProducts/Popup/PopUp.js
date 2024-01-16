// Modal.js

import React from "react";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const CustomModal = ({ isOpen, closeModal, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
            contentLabel="Form Submission"
          style={customStyles}
    >
      <div>
        <h2>{message}</h2>
        <button onClick={closeModal}>Close</button>
      </div>
    </Modal>
  );
};

export default CustomModal;
