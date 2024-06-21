import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex flex-col mx-auto lg:mx-0">
      <span className="font-jakarta font-semibold text-white text-sm text-center mb-5">
        Socials
      </span>
      <div className="flex items-center gap-6">
        <Link href="/" className="font-jakarta text-gray-300 text-xs">
          Instagram
        </Link>
        <Link href="/" className="font-jakarta text-gray-300 text-xs">
          Linked
        </Link>
        <Link href="/" className="font-jakarta text-gray-300 text-xs">
          Facebook
        </Link>
        <Link href="/" className="font-jakarta text-gray-300 text-xs">
          Tiktok
        </Link>
      </div>
    </div>
  );
};

export default Socials;
