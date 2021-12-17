import { useRef } from "react";

export default function TextField({
  type = "text",
  label,
  placeholder,
  value,
  onChange = () => {},
}) {
  const ref = useRef(undefined);

  return (
    <>
      {label && <label onClick={() => ref.current.focus()}>{label}</label>}

      <input
        ref={ref}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full focus:outline-blue-400 border rounded-sm p-2"
      />
    </>
  );
}
