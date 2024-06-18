import Link from "next/link";

const list = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Shop",
    href: "/shop",
  },
];
export const Nav = () => {
  return (
    <nav className="">
      <ul className="flex items-center space-x-14">
        {list.map(({ label, href }) => (
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
