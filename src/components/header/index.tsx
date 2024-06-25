"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Nav } from "./nav";
import { LogoLight } from "@/uikit/icons/logoLight";
import { AuthCTA } from "./authCTA";
import HeaderMobile from "../headerMobile";
import { LogoDark } from "@/uikit/icons/logoDark";
import Link from "next/link";

type HeaderProps = {
  bgColor?: "white" | "transparent";
  textColor?: "dark" | "white";
  position?: "sticky" | "fixed";
};

const Header = ({
  bgColor = "transparent",
  textColor = "white",
  position = "sticky",
}: HeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [colors, setColors] = useState({ bgColor, textColor });
  const handleWindowScroll = useCallback(() => {
    if (!ref.current) return;
    if (window.scrollY > 0) {
      setColors({ bgColor: "white", textColor: "dark" });
    } else {
      setColors({ bgColor, textColor });
    }
  }, [bgColor, textColor]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  return (
    <div
      ref={ref}
      className={`bg-${colors.bgColor} lg:h-[74px] ${position} left-0 top-0 w-full z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <HeaderMobile />
        <div className="items-center justify-between py-3 hidden lg:flex">
          <Link href="/">
            {colors.bgColor === "white" ? <LogoDark /> : <LogoLight />}
          </Link>
          <Nav textColor={colors.textColor} />
          <AuthCTA textColor={colors.textColor} />
        </div>
      </div>
    </div>
  );
};

export default Header;
