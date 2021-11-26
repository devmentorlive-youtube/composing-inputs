import { useRef } from "react";

export default function TextField({
  type = "text",
  label,
  placeholder,
  value,
  onChange = () => {},
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
}) {
  const ref = useRef(undefined);
  const leftIcon = renderLeftIcon();
  const rightIcon = renderRightIcon();

  return (
    <>
      {label && <label onClick={() => ref.current.focus()}>{label}</label>}
      <div className="flex items-center border rounded-sm p-2 w-full space-x-2">
        {leftIcon && <div>{leftIcon}</div>}
        <div className="w-full">
          <input
            ref={ref}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full focus:outline-none"
          />
        </div>
        {rightIcon && <div>{rightIcon}</div>}
      </div>
    </>
  );
}
