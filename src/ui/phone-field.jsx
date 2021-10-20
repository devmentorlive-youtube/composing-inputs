import { PhoneIcon } from "@heroicons/react/solid";
import NumberField from "./number-field";

export default function PhoneField({
  placeholder,
  value,
  onChange = () => {},
}) {
  return (
    <NumberField
      placeholder={placeholder}
      label={"Phone number"}
      value={value}
      maxLength={10}
      onChange={(val) => onChange(val)}
      renderLeftIcon={() => <PhoneIcon className="w-4 h-4" />}
    />
  );
}
