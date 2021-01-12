import React, { useState } from "react";
import ControlledInput from "../../components/ControlledInput";
import ControlledTextArea from "../../components/ControlledTextArea";
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
    event: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
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
        <CategoryDropdown value={formData.categoryId} onChange={handleChange} />
      </div>
      <div className="field is-grouped is-grouped-centered">
        <ControlledInput
          id="subtitle"
          placeholder="Lady of Light"
          onChange={handleChange}
          value={formData.subtitle}
          type="text"
          fill
        />
        <ControlledInput
          id="avatarUrl"
          placeholder="https://img.com/real_img"
          onChange={handleChange}
          value={formData.avatarUrl}
          type="text"
          label="Avatar URL"
        />
      </div>
      <div className="field">
        <ControlledTextArea
          id="description"
          placeholder="Jot something down... the first few sentences become a summary."
          value={formData.description}
          onChange={handleChange}
        />
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
