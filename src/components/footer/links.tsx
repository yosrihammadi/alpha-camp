import Link from "next/link";

const Links = () => {
  return (
    <div className="flex flex-col gap-5 text-center mb-6 lg:mb-0">
      <span className="font-jakarta font-semibold text-white text-sm">
        Quick Links
      </span>
      <Link href="/" className="font-jakarta text-sm text-gray-300">
        Home
      </Link>
      <Link href="/about" className="font-jakarta text-sm text-gray-300">
        About
      </Link>
      <Link href="/shop" className="font-jakarta text-sm text-gray-300">
        Shop
      </Link>
      <Link href="/blog" className="font-jakarta text-sm text-gray-300">
        Blog
      </Link>
    </div>
  );
};

export default Links;
