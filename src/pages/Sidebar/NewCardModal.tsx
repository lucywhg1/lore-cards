import React from "react";
import cx from "classnames";
import Title from "../../components/Title";

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
        <section className="modal-card-body"></section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="button" aria-label="close" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NewCardModal;
