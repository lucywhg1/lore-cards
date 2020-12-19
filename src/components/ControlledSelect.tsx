import React from "react";
import cx from "classnames";
import { startCase } from "lodash";

interface ControlledSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  fill?: boolean;
  id: string;
  label?: string;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  required = false,
  fill = false,
  id,
  className,
  label,
  children,
  ...props
}) => {
  const derivedLabel = label || startCase(id);

  return (
    <div className={cx("control", { "is-expanded": fill })}>
      <label className="label">{derivedLabel}</label>
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
    </div>
  );
};

export default ControlledSelect;
