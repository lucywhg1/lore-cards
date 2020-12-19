import React from "react";
import cx from "classnames";
import Control, { ControlProps } from "./Control";

type ControlledInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  ControlProps;

const ControlledInput: React.FC<ControlledInputProps> = ({
  required = false,
  fill = false,
  id,
  className,
  label,
  icon,
  ...props
}) => {
  return (
    <Control id={id} icon={icon} label={label} fill={fill}>
      <input
        className={cx("input", { "is-primary": required }, className)}
        id={id}
        required={required}
        {...props}
      />
    </Control>
  );
};

export default ControlledInput;
