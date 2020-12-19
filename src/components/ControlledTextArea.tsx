import React from "react";
import cx from "classnames";
import Control, { ControlProps } from "./Control";

type ControlledTextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  Omit<ControlProps, "icon">;

const ControlledTextArea: React.FC<ControlledTextAreaProps> = ({
  required = false,
  fill = false,
  id,
  className,
  label,
  ...props
}) => {
  return (
    <Control id={id} label={label} fill={fill}>
      <textarea
        className={cx("textarea", { "is-primary": required }, className)}
        id={id}
        required={required}
        {...props}
      />
    </Control>
  );
};

export default ControlledTextArea;
