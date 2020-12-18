import React from "react";
import cx from "classnames";
import { startCase } from "lodash";

interface ControlledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fill?: boolean;
  id: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  required,
  fill = false,
  id,
  className,
  ...props
}) => {
  return (
    <div className={cx("control", { "is-expanded": fill })}>
      <label className="label">{startCase(id)}</label>
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
