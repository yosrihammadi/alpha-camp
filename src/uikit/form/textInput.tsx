"use client";
import { useState } from "react";
import { Eye } from "../icons/Eye";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

type TextInputProps = {
  autoFocus?: boolean | undefined;
  type: string;
  id: string;
  label: string;
  name: string;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  register: UseFormRegister<FieldValues>;
};

const TextInput = ({
  autoFocus,
  type,
  id,
  label,
  name,
  errorMessage,
  register,
}: TextInputProps) => {
  const [secureText, setSecureText] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const { onChange, ...props } = register(name);

  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`absolute left-4 px-2 bg-white font-inika text-sm transition-all ${
          isFocused ? "text-gray-600" : "text-gray-500"
        } ${
          isFocused || !isEmpty ? " -top-[10px]" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {label}
      </label>
      <input
        autoFocus={autoFocus}
        type={!secureText && type === "password" ? "text" : type}
        id={id}
        className={`p-4 border-2 rounded-xl w-full outline-none ${
          isFocused
            ? "text-gray-600 border-gray-300"
            : "text-gray-500 border-gray-100"
        }`}
        onFocus={() => setIsFocused(true)}
        {...props}
        onChange={(e) => {
          setIsEmpty(!(e.target.value.length > 0));
          onChange(e);
        }}
        onBlur={() => setIsFocused(false)}
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
      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default TextInput;
