import React, { useEffect, useState } from "react";
import Title from "../../components/Title";
import { getCategories } from "../../services/CategoryService";
import { Category } from "../../types";
import CategoryBlock from "./CategoryBlock";
import NewCardButton from "./NewCardButton";

interface SidebarProps {
  activeCategory: number; // id
  setCategory: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCategory, activeCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setCategories(await getCategories());
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (id: number) => {
    setCategory(id);
  };

  return (
    <nav className="panel is-primary">
      <p className="panel-heading">
        <Title className="has-text-light">Categories</Title>
      </p>
      <NewCardButton categoryId={activeCategory} />
      {categories.map((category) => (
        <CategoryBlock
          key={category.id}
          active={category.id === activeCategory}
          category={category}
          onSelect={handleCategorySelect}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
