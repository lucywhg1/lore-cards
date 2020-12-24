import React from "react";
import cx from "classnames";
import Title from "../../components/Title";
import NewCardForm from "../CardForm/NewCardForm";

interface NewCardModalProps {
  onConfirm: () => void;
  onClose: () => void;
  open: boolean;
}

const NewCardModal: React.FC<NewCardModalProps> = ({
  onConfirm,
  onClose,
  open,
}) => {
  const handleConfirm = (): void => {
    // create card
    onConfirm();
  };

  return (
    <div className={cx("modal", { "is-active": open })}>
      <div onClick={onClose} className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            <Title>Write a Lore Card</Title>
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">
          <NewCardForm onConfirm={handleConfirm} onCancel={onClose} card={{}} />
        </section>
      </div>
    </div>
  );
};

export default NewCardModal;
