import React, { useState } from "react";

interface NewCardProps {
  categoryId: number;
}
const NewCardButton: React.FC<NewCardProps> = ({ categoryId }) => {
  const [modal, setModal] = useState();

  const handleClick = (): void => {};

  return (
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
  );
};

export default NewCardButton;
