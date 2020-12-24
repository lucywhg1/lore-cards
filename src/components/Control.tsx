import cx from "classnames";
import { startCase } from "lodash";
import React from "react";

export interface ControlProps {
  id: string;
  icon?: string;
  label?: string;
  fill?: boolean;
}

const Control: React.FC<ControlProps> = ({
  id,
  icon,
  label,
  fill,
  children,
}) => {
  const derivedLabel = label || startCase(id);

  return (
    <div
      className={cx(
        "control",
        { "is-expanded": fill },
        { "has-icons-left": icon }
      )}
    >
      <label className="label">{derivedLabel}</label>
      {icon && (
        <span className="icon is-small is-left">
          <i className={cx("fas", `fa-${icon}`)}></i>
        </span>
      )}
      {children}
    </div>
  );
};

export default Control;
