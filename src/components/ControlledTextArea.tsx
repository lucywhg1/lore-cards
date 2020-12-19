import React from "react";
import cx from "classnames";
import { startCase } from "lodash";

interface ControlledTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
  fill?: boolean;
}

const ControlledTextArea: React.FC<ControlledTextAreaProps> = ({
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
      <textarea
        className={cx("textarea", { "is-primary": required }, className)}
        id={id}
        required={required}
        {...props}
      />
    </div>
  );
};

export default ControlledTextArea;
