"use client";
import * as z from "zod";
import TextInput from "@/uikit/form/textInput";
import Link from "next/link";
import Image from "next/image";

import {
  TElement,
  signUpBusinessElements,
  signUpPersonalElements,
} from "./form";
import { useForm } from "react-hook-form";
import { SignUpSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpFormProps = {
  isBusiness?: boolean | null;
};

const SignUpForm = ({ isBusiness }: SignUpFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const elements = isBusiness ? signUpBusinessElements : signUpPersonalElements;
  const switchLabel = isBusiness
    ? "Switch to Personal account"
    : "Switch to Business account";

  const switchUrl = `/sign-up/${isBusiness ? "personal" : "business"}`;

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    console.log(values);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[-2px_2px_6px_0px_rgba(17,31,53,0.15)] m-auto grid grid-cols-12 lg:max-w-[1200px]">
      <div className="flex flex-col col-span-12 lg:col-span-7 py-8 px-11">
        <span className="font-inika text-4xl text-black mb-5">Sign Up</span>
        <p className="font-inika text-xl text-black mb-14">
          {isBusiness ? (
            <>
              Sign Up for <strong>Business</strong> account to get access to
              Lorem ipsum dolor sit amet consectetur. Venenatis feugiat laoreet
            </>
          ) : (
            <>
              Sign Up for <strong>Personal</strong> account to get access to
              Lorem ipsum dolor sit amet consectetur. Venenatis feugiat laoreet
            </>
          )}
        </p>
        <form className="space-y-5" autoFocus onSubmit={handleSubmit(onSubmit)}>
          {elements.map((el: TElement) => {
            const name = el.name;
            return (
              <TextInput
                key={el.id}
                {...el}
                errorMessage={errors[name]?.message}
                register={register}
              />
            );
          })}
          <button
            type="submit"
            className="w-full text-sm p-4 text-white bg-green-400 rounded-xl font-inika font-bold"
          >
            Sign Up
          </button>
          <div className="flex items-center w-full space-x-2">
            <hr className="h-[1px] flex-1 border-gray-200" />
            <span className="font-inika text-gray-400 text-sm">or</span>
            <hr className="h-[1px] flex-1 border-gray-200" />
          </div>
          <div className="flex items-center justify-center space-x-1">
            <span className="text-md text-gray-500 font-inika">
              Already have an account?{" "}
            </span>
            <Link
              href="/sign-in"
              className="font-inika font-bold text-green-400 text-md underline"
            >
              Sign In
            </Link>
          </div>
        </form>
      </div>
      <div className="bg-green-400 flex flex-col col-span-12 lg:col-span-5 py-8 px-11">
        <Image
          src="/auth/business-img.svg"
          width={420}
          height={420}
          alt=""
          className="mx-auto w-full mb-14"
        />
        <p className="font-inika text-white text-lg opacity-50 mb-14">
          Lorem ipsum dolor sit amet consectetur. Venenatis feugiat laoreet
          tellus tellus aliquam vitae vitae. Viverra non non arcu viverra
          tellus. Eget purus aenean ullamcorper lorem maecenas. Cras tortor
          iaculis eu facilisis tristique rutrum sed accumsan tempus. Vestibulum
          sit ut leo nisi commodo dictum. Et diam in mi est sed. <br /> Nullam
          maecenas in amet in lacinia tristique rhoncus tristique volutpat.
          Morbi faucibus sit tincidunt congue nisl facilisi porta. Vitae lorem
          pellentesque leo neque tortor nisi quam feugiat. Mi at molestie
          consectetur accumsan senectus fusce odio. Mi auctor aenean metus
          lectus velit iaculis fringilla turpis. Felis commodo nulla nibh arcu
          sit quis odio tellus sem. Et feugiat dolor consectetur.
        </p>
        <Link
          className="w-full text-sm p-4 bg-white text-green-400 rounded-xl font-inika font-bold text-center"
          href={switchUrl}
        >
          {switchLabel}
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
