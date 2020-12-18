import React from "react";

const CategoryDropdown: React.FC = () => {
  return (
    <div className="control">
      <label className="label">Category</label>
      <div className="select is-primary">
        <select required>
          <option value="">Choose...</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryDropdown;
