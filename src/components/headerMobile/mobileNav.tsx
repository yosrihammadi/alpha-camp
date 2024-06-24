import { navMenu } from "@/static/navMenu";
import Link from "next/link";
import React from "react";

type MobileNavProps = {
  toggleModal: Function;
};

const MobileNav = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <nav className="my-auto">
        <ul className="flex items-center flex-col">
          {navMenu.map(({ label, href }) => (
            <li key={label} className="w-full text-center">
              <Link
                href={href}
                className="font-inika font-semibold text-gray-800 w-full inline-block py-5"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
