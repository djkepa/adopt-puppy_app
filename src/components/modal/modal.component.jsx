import React from 'react';

//Styles
import './modal.styles.scss';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">{children}</div>
    </div>,
  ];
};

export default Modal;
