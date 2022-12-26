import React from "react";
import ReactDOM from "react-dom";
import "../App.css";

export function Modal(props) {
  console.log(props);
  if (!props.isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div onClick={() => props.toggleModal(false)} className="overlay"></div>
      <div className="modal">{props.children}</div>
    </>,
    document.getElementById("admin")
  );
}
