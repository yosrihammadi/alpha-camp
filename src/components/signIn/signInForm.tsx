"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import Checkbox from "@/uikit/form/checkbox";
import TextInput from "@/uikit/form/textInput";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      saveSession: false,
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values);
  };

  return (
    <div className="bg-white py-8 px-11 rounded-2xl shadow-[-2px_2px_6px_0px_rgba(17,31,53,0.15)] flex flex-col w-full max-w-[525px] m-auto">
      <span className="font-inika text-sm text-black uppercase mb-2">
        Welcome Back
      </span>

      <span className="font-inika text-2xl text-black mb-5">
        Sign In to your Account
      </span>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          autoFocus
          id="email"
          label="Email"
          type="email"
          name="email"
          errorMessage={errors.email?.message}
          register={register}
        />
        <TextInput
          id="password"
          label="Password"
          type="password"
          name="password"
          errorMessage={errors.password?.message}
          register={register}
        />
        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            id="saveSession"
            name="saveSession"
            register={register}
          />
          <Link
            href="forgot-password"
            className="font-inika text-sm text-gray-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-sm p-4 text-white bg-green-400 rounded-xl font-inika font-bold"
          onSubmit={handleSubmit(onSubmit)}
        >
          Sign In
        </button>
      </form>
      <div className="flex items-center w-full space-x-2 mt-5">
        <hr className="h-[1px] flex-1 border-gray-200" />
        <span className="font-inika text-gray-400 text-sm">or</span>
        <hr className="h-[1px] flex-1 border-gray-200" />
      </div>
      <div className="flex items-center justify-center space-x-1 mt-5">
        <span className="text-md text-gray-500 font-inika">
          Need an account?
        </span>
        <Link
          href="/sign-up/personal"
          className="font-inika font-bold text-green-400 text-md underline"
        >
          Create one
        </Link>
      </div>
    </div>
  );
};

export default SignInForm;
