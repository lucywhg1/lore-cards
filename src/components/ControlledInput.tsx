import React from "react";
import cx from "classnames";
import { startCase } from "lodash";

interface ControlledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fill?: boolean;
  id: string;
  label?: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  required = false,
  fill = false,
  id,
  className,
  label,
  ...props
}) => {
  const derivedLabel = label || startCase(id);

  return (
    <div className={cx("control", { "is-expanded": fill })}>
      <label className="label">{derivedLabel}</label>
      <input
        className={cx("input", { "is-primary": required }, className)}
        id={id}
        required={required}
        {...props}
      />
    </div>
  );
};

export default ControlledInput;
