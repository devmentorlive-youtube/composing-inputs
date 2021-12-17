import NumberField from "../number-field";

export default function CcvField({ label, onChange = () => {}, ...rest }) {
  return (
    <NumberField
      onChange={(val) => onChange(val)}
      label={label || "CCV"}
      maxLength={3}
      allowDecimals={false}
      {...rest}
    />
  );
}
