import TextField from "../text-field";

export default function NumberField({
  value,
  label,
  onChange = () => {},
  allowDecimals = false,
  maxLength = 128,
}) {
  return (
    <TextField
      value={value}
      onChange={(val) =>
        onChange(
          val
            .replace(allowDecimals ? /[^0-9.]/g : /[^0-9]/g, "")
            .slice(0, maxLength)
        )
      }
      label={label}
    />
  );
}
