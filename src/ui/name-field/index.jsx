import TextField from "../text-field";
import { UserIcon } from "@heroicons/react/solid";

export default function NameField({ value, onChange = () => {}, label }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      renderLeftIcon={() => <UserIcon className="w-6 h-6" />}
    />
  );
}
