import SearchInput from "@/uikit/form/searchInput";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="h-[calc(100vh+74px)] min-h-[600px] max-h-[980px] relative bg-black bg-opacity-50 px-6 lg:px-0">
      <div className="container mx-auto flex flex-col h-full">
        <div className="flex items-center justify-center flex-col text-center flex-1">
          <p className="text-white text-base mb-5">
            Let&apos;s make S&apos;more memories
          </p>
          <h1 className="text-white font-bold text-5xl uppercase mb-10">
            Camp is more <br /> than just a word, <br /> it’s an experience!
          </h1>
          <SearchInput />
        </div>
      </div>
      <Image
        fill
        src="/home/hero-bg.webp"
        sizes="100% 100%"
        alt=""
        className="-z-10 object-cover"
      />
    </div>
  );
};
