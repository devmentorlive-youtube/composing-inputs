import NumberField from "../number-field";
import { PhoneIcon } from "@heroicons/react/solid";

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
      onChange={(val) => onChange(val.replace(/[^0-9]/g, "").slice(0, 10))}
      label={label}
      maxLength={10}
      renderLeftIcon={() => <PhoneIcon className="w-6 h-6" />}
    />
  );
}
