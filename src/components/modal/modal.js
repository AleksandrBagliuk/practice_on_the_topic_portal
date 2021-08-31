import React from 'react';
import './modal.scss';
import ReactDOM from "react-dom";

const Modal = ({closeModal}) => {
  return ReactDOM.createPortal(
    <div className='modal'>
      <div>
        <button onClick={closeModal}>Close</button>
      </div>
      <div>
        модальное окно
      </div>
    </div>, document.getElementById('modal-root'))
};

export default Modal;