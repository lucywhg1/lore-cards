import React, { useEffect, useState } from "react";
import ControlledSelect from "../../components/ControlledSelect";
import { getCategories } from "../../services/CategoryService";
import { Category } from "../../types";

interface CategoryDropdownProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  value,
  onChange,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setCategories(await getCategories());
    };

    fetchCategories();
  }, []);

  return (
    <ControlledSelect
      id="categoryId"
      label="Category"
      value={value}
      onChange={onChange}
      required
    >
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </ControlledSelect>
  );
};

export default CategoryDropdown;
