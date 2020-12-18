import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/CategoryService";
import { Category } from "../../types";
import CategoryBlock from "./CategoryBlock";
import NewCardBlock from "./NewCardBlock";

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
      <p className="panel-heading">Categories</p>
      <NewCardBlock categoryId={activeCategory} />
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
