import React from "react";
import cx from "classnames";

interface TitleProps {
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <span className={cx("title", "is-uppercase", className)}>{children}</span>
  );
};

export default Title;
