import React from "react";
import cx from "classnames";

interface TitleProps {
  className?: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, className, color }) => {
  return (
    <span
      className={cx(
        "title",
        "is-small-caps",
        {
          [`has-text-${color}`]: color,
        },
        className
      )}
    >
      {children}
    </span>
  );
};

export default Title;
