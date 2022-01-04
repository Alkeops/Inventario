import classNames from "classnames";

export const classGenerator = ({className, prefix, variant}) =>
  classNames(prefix, {
    [`${className}`]: className,
    [`${prefix}--${variant}`]: variant,
  });
