import { navMenu } from "@/static/navMenu";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-14">
        {navMenu.map(({ label, href }) => (
          <li key={label} className="font-inika">
            <Link href={href} className="font-inika text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
