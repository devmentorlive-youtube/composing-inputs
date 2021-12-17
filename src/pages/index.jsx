import { useState } from "react";
import TextField from "../ui/text-field";
import NumberField from "../ui/number-field";
import PhoneField from "../ui/phone-field";
import CcvField from "../ui/ccv-field";

export default function Homepage({}) {
  const [string, setString] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [ccv, setCcv] = useState("");

  return (
    <div className="w-1/2 mt-24 border mx-auto p-4 bg-white flex flex-col space-y-2">
      <TextField value={string} onChange={setString} label="Some string" />
      <NumberField value={number} onChange={setNumber} label="Some number" />
      <PhoneField value={phone} onChange={setPhone} />
      <CcvField value={ccv} onChange={setCcv} />
    </div>
  );
}
