import React from "react";
import cx from "classnames";
import Control, { ControlProps } from "./Control";

type ControlledSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  ControlProps;

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  required = false,
  fill = false,
  id,
  className,
  label,
  children,
  icon,
  ...props
}) => {
  return (
    <Control id={id} icon={icon} label={label} fill={fill}>
      <div
        className={cx(
          "select",
          { "is-primary": required },
          { "is-fullwidth": fill },
          className
        )}
      >
        <select id={id} required={required} {...props}>
          <option value="">Choose...</option>
          {children}
        </select>
      </div>
    </Control>
  );
};

export default ControlledSelect;
