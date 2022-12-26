import React, { useState } from "react";
import { Modal } from "./components/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="button-wrapper">
        <button onClick={() => setIsOpen(true)}>open modal</button>
        <Modal isModalOpen={isOpen} toggleModal={setIsOpen}>
          <h2>Login form</h2>
          <div>
            <label htmlFor="">Username: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Password: </label>
            <input type="password" />
          </div>
          <button onClick={() => setIsOpen(false)}>close</button>
        </Modal>
        <div className="additional-data">
          <p>inside</p>
        </div>
      </div>
      <div className="additional-data">
        <h1>title</h1>
        <p>Lorem ipsum dolor sit amet consectetur,</p>
      </div>
    </>
  );
}

export default App;
