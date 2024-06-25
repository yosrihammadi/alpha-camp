import { Person } from "@/uikit/icons/person";
import Link from "next/link";

export const AuthCTA = ({ textColor }: { textColor: string }) => {
  return (
    <div className="flex items-center">
      <Person color={textColor} />
      <Link
        href="/auth"
        className={`font-inika text-${textColor === "white" ? "white" : "black"} ps-2`}
      >
        Sign In | Sign Up
      </Link>
    </div>
  );
};
