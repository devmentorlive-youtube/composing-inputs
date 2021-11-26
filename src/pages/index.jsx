import { useState, useRef } from "react";
import NameField from "../ui/name-field";
import PhoneField from "../ui/phone-field";

export default function Homepage({}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="w-1/2 mt-24 border mx-auto p-4 bg-white">
      <NameField value={name} onChange={setName} label="Your name" />
      <PhoneField value={phone} onChange={setPhone} label="Phone number" />
    </div>
  );
}
