import { Person } from "@/uikit/icons/person";
import Link from "next/link";

export const AuthCTA = () => {
  return (
    <div className="flax items-center">
      <Person />
      <Link href="/auth" className="font-inika text-white">
        Sign In | Sign Up
      </Link>
    </div>
  );
};
