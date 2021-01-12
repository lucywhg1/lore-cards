import React, { useState } from "react";
import NewCardModal from "./NewCardModal";

interface NewCardProps {
  categoryId: number;
}
const NewCardButton: React.FC<NewCardProps> = ({ categoryId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (): void => {
    setModalOpen(true);
  };

  const handleClose = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <span
        role="button"
        className="button panel-block is-justify-content-center has-background-success"
        onClick={handleClick}
      >
        <i
          className="fas fa-plus mr-2 has-text-success-dark"
          aria-hidden="true"
        />
        <span>Create Card</span>
      </span>
      <NewCardModal
        onClose={handleClose}
        onConfirm={handleClose}
        open={modalOpen}
      />
    </>
  );
};

export default NewCardButton;
