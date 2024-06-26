"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkTree = () => {
  const pathname = usePathname();
  const links = pathname.slice(1).split("/");
  // function to handle more than 2 routes
  return (
    <div className="flex items-center space-x-4">
      {links.map((link, index) => (
        <>
          <Link
            key={link}
            href={`${index > 0 ? "/" + links[index - 1] : ""}/${link}`}
            className="text-blue-700 text-base font-inika"
          >
            {link[0].toUpperCase() + link.slice(1)}
          </Link>
          {index < links.length - 1 && (
            <span className="text-blue-700 text-base font-inika">/</span>
          )}
        </>
      ))}
    </div>
  );
};

export default LinkTree;
