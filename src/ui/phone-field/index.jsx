import NumberField from "../number-field";

export default function PhoneField({ value, label, onChange = () => {} }) {
  function mask(val) {
    var reg = /^(\d{1,3})(?:\s*(\d{1,3})(?:\s*(\d{1,4})?)?)?$/;

    return val.replace(
      reg,
      (_, code, prefix, suffix) =>
        (code.length > 0 ? `(${code}` : "") +
        (prefix ? `) ${prefix}` : "") +
        (suffix ? ` - ${suffix}` : "")
    );
  }

  return (
    <NumberField
      value={mask(value)}
      onChange={(val) => onChange(val)}
      label={label || "Phone number"}
      maxLength={10}
      allowDecimals={false}
    />
  );
}
