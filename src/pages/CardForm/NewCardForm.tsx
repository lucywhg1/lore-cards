import React, { useState } from "react";
import ControlledInput from "../../components/ControlledInput";
import { LoreCard } from "../../types";
import CategoryDropdown from "./CategoryDropdown";

const emptyCard: LoreCard = {
  title: "",
  subtitle: "",
  avatarUrl: "",
  categoryId: -1,
  summary: "",
  description: "",
  id: -1,
};

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
  const [formData, setFormData] = useState<LoreCard>({
    ...emptyCard,
    ...card,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { id, value } = event.target;
    console.log(id);
    console.log(value);
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log(formData);
    event.preventDefault();
    onConfirm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-grouped is-grouped-centered">
        <ControlledInput
          id="title"
          placeholder="Selune"
          onChange={handleChange}
          value={formData.title}
          type="text"
          required={true}
          fill={true}
        />
        <CategoryDropdown />
      </div>
      <div className="field is-grouped is-grouped-centered">
        <div className="control is-expanded">
          <label className="label">Subtitle</label>
          <input
            className="input"
            type="text"
            placeholder="Lady of Light"
            id="subtitle"
            onChange={handleChange}
            value={formData.subtitle}
          />
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
