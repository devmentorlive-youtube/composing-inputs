import TextField from "./text-field";

export function numbersOnly(val) {
  return val.toString().replace(/[^0-9]/g, "");
}

export default function NumberField({
  label,
  placeholder,
  value,
  maxLength = 128,
  onChange = () => {},
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
}) {
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      value={value}
      onChange={(val) => onChange(numbersOnly(val).slice(0, maxLength))}
      renderLeftIcon={renderLeftIcon}
      renderRightIcon={renderRightIcon}
    />
  );
}
