import { Person } from "@/uikit/icons/person";
import Link from "next/link";

export const AuthCTA = () => {
  return (
    <div className="flex items-center">
      <Person />
      <Link href="/auth" className="font-inika text-white ps-2">
        Sign In | Sign Up
      </Link>
    </div>
  );
};
