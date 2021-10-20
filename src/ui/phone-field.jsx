import { PhoneIcon } from "@heroicons/react/solid";
import NumberField from "./number-field";

export default function PhoneField({
  placeholder,
  value,
  onChange = () => {},
}) {
  function mask(val) {
    var reg = /^(\d{1,3})(?:\s*(\d{1,3})(?:\s*(\d{1,4})(?:\s*(\d{1,4}))?)?)?$/;

    return val.replace(
      reg,
      (_, code, prefix, suffix, extension) =>
        (code.length > 0 ? `(${code}` : "") +
        (prefix ? `) ${prefix}` : "") +
        (suffix ? ` - ${suffix}` : "") +
        (extension ? ` ${extension}` : "")
    );
  }

  return (
    <NumberField
      placeholder={placeholder}
      label={"Phone number"}
      value={mask(value)}
      maxLength={10}
      onChange={(val) => onChange(val)}
      renderLeftIcon={() => <PhoneIcon className="w-4 h-4" />}
    />
  );
}
