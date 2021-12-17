import NumberField from "../number-field";

export default function CcvField({ value, label, onChange = () => {} }) {
  return (
    <NumberField
      value={value}
      onChange={(val) => onChange(val)}
      label={label || "CCV"}
      maxLength={3}
      allowDecimals={false}
    />
  );
}
