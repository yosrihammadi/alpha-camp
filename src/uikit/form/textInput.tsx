"use client";
import { ChangeEvent, useState } from "react";
import { Eye } from "../icons/Eye";

type TextInputProps = {
  autoFocus?: boolean | undefined;
  type: string;
  name: string;
  id: string;
  value: string | number | undefined;
  label: string;
  onChange: Function | null;
};

const TextInput = ({
  autoFocus,
  type,
  name,
  id,
  label,
  value,
  onChange,
}: TextInputProps) => {
  const [secureText, setSecureText] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(!(String(value).length > 0));
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setIsEmpty(!(value.trim().length > 0));
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`absolute left-4 px-2 bg-white font-inika text-sm transition-all ${isFocused ? "text-gray-600" : "text-gray-500"} ${isFocused || !isEmpty ? " -top-[10px]" : "top-1/2 -translate-y-1/2"}`}
      >
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        type={!secureText && type === "password" ? "text" : type}
        id={id}
        name={name}
        className={`p-4 border-2 rounded-xl w-full outline-none ${isFocused ? "text-gray-600 border-gray-300" : "text-gray-500 border-gray-100"}`}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
      {type === "password" && (
        <button
          type="button"
          className="bg-transparent border-none outline-none absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setSecureText((prevState) => !prevState)}
        >
          <Eye />
        </button>
      )}
    </div>
  );
};

export default TextInput;
