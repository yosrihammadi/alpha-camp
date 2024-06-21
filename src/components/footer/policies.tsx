import Link from "next/link";
import React from "react";

const Policies = () => {
  return (
    <div className="flex gap-3 mt-auto">
      <Link href="/" className="font-jakarta text-xs text-gray-300">
        Privacy Policy
      </Link>
      <span className="h-[18px] w-[1px] bg-blue-900" />
      <Link href="/" className="font-jakarta text-xs text-gray-300">
        Cookie Policy
      </Link>
    </div>
  );
};

export default Policies;
