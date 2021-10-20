import { useState } from "react";

import NameField from "../ui/name-field";
import PhoneField from "../ui/phone-field";

export default function Homepage({}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <div className="w-1/2 mt-24 border mx-auto mt-8 p-4 bg-white">
      <div className="w-72">
        <NameField value={name} onChange={(val) => setName(val)} />
        <PhoneField value={phone} onChange={(val) => setPhone(val)} />
      </div>
    </div>
  );
}
