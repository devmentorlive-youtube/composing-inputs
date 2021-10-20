import { useRef, useState, useEffect } from "react";
import InputMask from "react-input-mask";

export default function TextField({
  type = "text",
  label,
  value,
  placeholder,
  mask,
  onChange = () => {},
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
}) {
  const ref = useRef(undefined);
  const leftIcon = renderLeftIcon();
  const rightIcon = renderRightIcon();
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    console.log("ref changed!", ref.current);
  }, [ref]);

  const sharedProps = {
    value,
    placeholder,
    className: "w-full focus:outline-none focus:ring-none",
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  return (
    <>
      {label && (
        <label
          className="block text-gray-800"
          onClick={() => ref.current.focus()}>
          {label}:
        </label>
      )}
      <div
        className={`border p-2 rounded-sm text-gray-800 ${
          focused ? "border-gray-800" : "border-gray-300"
        }`}>
        <div className="flex items-center">
          {leftIcon && (
            <div className="mx-2" onClick={() => ref.current.focus()}>
              {leftIcon}
            </div>
          )}
          <div className="w-full flex-grow">
            {mask ? (
              <InputMask
                inputRef={ref}
                mask={mask}
                onChange={(e) => onChange(e.target.value)}
                {...sharedProps}
              />
            ) : (
              <input
                ref={ref}
                type={type}
                onChange={(e) => onChange(e.target.value)}
                {...sharedProps}
              />
            )}
          </div>
          {rightIcon && <div>{rightIcon}</div>}
        </div>
      </div>
    </>
  );
}
