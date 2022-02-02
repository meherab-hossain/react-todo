import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <section className="card">
      <header>TITLE</header>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onChange={closeModalHandler} />}
    </section>
  );
}
export default Todo;
