import React from "react";
import { LoreCard } from "../../types";
import CategoryDropdown from "./CategoryDropdown";

interface NewCardFormProps {
  card: Partial<LoreCard>;
  onConfirm: () => void;
  onCancel: () => void;
}

const NewCardForm: React.FC<NewCardFormProps> = ({
  card,
  onConfirm,
  onCancel,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log("Submitted");
    event.preventDefault();
    onConfirm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-grouped is-grouped-centered">
        <div className="control is-expanded">
          <label className="label">Title</label>
          <input
            className="input is-primary"
            type="text"
            placeholder="Selune"
            required
          />
        </div>
        <CategoryDropdown />
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control is-expanded">
          <label className="label">Subtitle</label>
          <input className="input" type="text" placeholder="Lady of Light" />
        </div>
        <div className="control">
          <label className="label">Avatar URL</label>
          <input
            className="input"
            type="text"
            placeholder="https://img.com/real_img"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <label className="label">Description</label>
          <textarea
            className="textarea"
            placeholder="Jot something down..."
          ></textarea>
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button
            className="button is-warning is-light"
            aria-label="close"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
        <div className="control">
          <button type="submit" className="button is-success">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewCardForm;
