"use client";
import Checkbox from "@/uikit/form/checkbox";
import TextInput from "@/uikit/form/textInput";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    saveSession: false,
  });
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="bg-white py-8 px-11 rounded-2xl shadow-[-2px_2px_6px_0px_rgba(17,31,53,0.15)] flex flex-col w-[525px] mx-auto">
      <span className="font-inika text-sm text-black uppercase mb-2">
        Welcome Back
      </span>

      <span className="font-inika text-2xl text-black mb-5">
        Sign In to your Account
      </span>
      <form className="space-y-5" autoFocus>
        <TextInput
          autoFocus
          name="email"
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={onChange}
        />
        <TextInput
          name="password"
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={onChange}
        />
        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            id="saveSession"
            name="saveSession"
            value={formData.saveSession}
            onChange={onChange}
          />
          <Link
            href="forgot-password"
            className="font-inika text-sm text-gray-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="">
          <button className="w-full text-sm p-4 text-white bg-green-400 rounded-xl font-inika font-bold text-sm ">
            Sign In
          </button>
        </div>
        <div className="flex items-center w-full space-x-2">
          <hr className="h-[1px] flex-1 border-gray-200" />
          <span className="font-inika text-gray-400 text-sm">or</span>
          <hr className="h-[1px] flex-1 border-gray-200" />
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-md text-gray-500 font-inika">
            Need an account?
          </span>
          <Link
            href="/sign-up"
            className="font-inika font-bold text-green-400 text-md underline"
          >
            Create one
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
