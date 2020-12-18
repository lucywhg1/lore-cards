import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/CategoryService";
import { Campaign, Category } from "../../types";
import CategoryBlock from "./CategoryBlock";
import CharacterDropdown from "./CharacterDropdown";

interface SidebarProps {
  campaign: Campaign;
  activeCategory: number; // id
  setCategory: (id: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  campaign,
  setCategory,
  activeCategory,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setCategories(await getCategories(campaign));
    };

    fetchCategories();
  }, [campaign]);

  const handleCategorySelect = (id: number) => {
    setCategory(id);
  };

  return (
    <nav className="panel is-primary">
      <p className="panel-heading">Categories</p>
      <CharacterDropdown />
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
