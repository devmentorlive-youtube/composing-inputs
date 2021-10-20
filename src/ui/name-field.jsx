import { UserIcon } from "@heroicons/react/solid";
import TextField from "./text-field";

export default function NameField({ placeholder, value, onChange = () => {} }) {
  return (
    <TextField
      placeholder={placeholder}
      label={"Name"}
      value={value}
      onChange={(val) => onChange(val)}
      renderLeftIcon={() => <UserIcon className="w-4 h-4" />}
    />
  );
}
