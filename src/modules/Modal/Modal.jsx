import { useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import s from "./Modal.module.css";

const Modal = ({ children }) => {
  const modalRef = useRef(document.querySelector("#modal-root"));

  return createPortal(
    <div className={s.modal}>{children}</div>,
    modalRef.current
  );
};

Modal.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Modal;
