import TextField from "../text-field";

export default function NumberField({
  value,
  label,
  onChange = () => {},
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
}) {
  return (
    <TextField
      value={value}
      onChange={(val) => onChange(val.replace(/[^0-9.]/g, ""))}
      label={label}
      renderLeftIcon={renderLeftIcon}
      renderRightIcon={renderRightIcon}
    />
  );
}
