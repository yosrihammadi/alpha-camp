import { navMenu } from "@/static/navMenu";
import Link from "next/link";

type NavProps = {
  textColor: string | "white";
};
export const Nav = ({ textColor }: NavProps) => {
  return (
    <nav>
      <ul className="flex items-center space-x-14">
        {navMenu.map(({ label, href }) => (
          <li key={label} className="font-inika">
            <Link
              href={href}
              className={`font-inika text-${textColor === "white" ? "white" : "black"}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
