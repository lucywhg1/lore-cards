import React from "react";
import cx from "classnames";
import { Category } from "../../types";

interface CategoryBlockProps {
  active: boolean;
  category: Category;
}
const CategoryBlock: React.FC<CategoryBlockProps> = ({ active, category }) => {
  const { name, icon, iconColor } = category;

  return (
    <a className={cx("panel-block", { "is-active": active })}>
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
