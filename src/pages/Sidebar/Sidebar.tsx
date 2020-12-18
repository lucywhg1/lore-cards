import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/CategoryService";
import { Campaign, Category } from "../../types";
import CategoryBlock from "./CategoryBlock";
import CharacterDropdown from "./CharacterDropdown";

interface SidebarProps {
  campaign: Campaign;
}

const Sidebar: React.FC<SidebarProps> = ({ campaign }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      setCategories(await getCategories());
    };

    fetchCategories();
  }, []);

  const handleCategorySelect = (name: string) => {
    setActive(name);
  };

  return (
    <nav className="panel is-primary">
      <p className="panel-heading">Categories</p>
      <CharacterDropdown />
      {categories.map((category) => (
        <CategoryBlock
          active={category.name == active}
          category={category}
          onSelect={handleCategorySelect}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
