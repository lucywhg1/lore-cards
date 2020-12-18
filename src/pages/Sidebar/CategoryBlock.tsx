import React from "react";
import cx from "classnames";
import { Category } from "../../types";

interface CategoryBlockProps {
  active: boolean;
  category: Category;
  onSelect: (name: string) => void;
}
const CategoryBlock: React.FC<CategoryBlockProps> = ({
  active,
  category,
  onSelect,
}) => {
  const { name, icon, iconColor } = category;

  const handleClick = (): void => {
    onSelect(name);
  };

  return (
    <a
      className={cx("panel-block", { "is-active": active })}
      onClick={handleClick}
    >
      <span
        className={cx("panel-icon", {
          [`has-text-${iconColor}`]: iconColor && !active,
        })}
      >
        <i
          className={cx({
            [`fas fa-${icon}`]: icon,
          })}
          aria-hidden="true"
        ></i>
      </span>
      <span className={cx({ "has-text-weight-semibold": active })}>{name}</span>
    </a>
  );
};

export default CategoryBlock;
