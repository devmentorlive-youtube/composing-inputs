import TextField from "../text-field";

export default function NumberField({
  onChange = () => {},
  allowDecimals = false,
  maxLength = 128,
  ...rest
}) {
  return (
    <TextField
      onChange={(val) =>
        onChange(
          val
            .replace(allowDecimals ? /[^0-9.]/g : /[^0-9]/g, "")
            .slice(0, maxLength)
        )
      }
      {...rest}
    />
  );
}
