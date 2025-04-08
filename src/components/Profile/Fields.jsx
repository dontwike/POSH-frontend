import React, { useState } from "react";
import { Pencil } from "lucide-react";

const Fields = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {["firstName", "lastName", "email", "phone"].map((field, index) => (
        <div key={index} className="flex flex-col">
          <label className="text-lg font-semibold">
            {field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}{" "}
            :
          </label>
          <div className="relative mt-1">
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={`Enter ${field
                .replace(/([A-Z])/g, " $1")
                .toLowerCase()}`}
              className="w-full bg-gray-100 p-3 pr-10 border-none outline-none"
            />
            <Pencil
              className="absolute right-3 top-3 text-gray-500"
              size={18}
            />
          </div>
        </div>
      ))}

      <div>
        <button className="bg-black text-white py-2 px-14">Save</button>
      </div>
    </div>
  );
};

export default Fields;
