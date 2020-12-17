import React from "react";
import { Category } from "../../types";
import CategoryBlock from "./CategoryBlock";
import CharacterDropdown from "./CharacterDropdown";

interface SidebarProps {
  categories: Category[];
}

const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  return (
    <nav className="panel is-primary">
      <p className="panel-heading">Categories</p>
      <CharacterDropdown />
      <CategoryBlock active={false} category={categories[0]} />
      <CategoryBlock active={true} category={categories[1]} />
    </nav>
  );
};

export default Sidebar;
