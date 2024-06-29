"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Nav } from "./nav";
import { LogoLight } from "@/uikit/icons/logoLight";
import { AuthCTA } from "./authCTA";
import HeaderMobile from "../headerMobile";
import { LogoDark } from "@/uikit/icons/logoDark";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const [styles, setStyles] = useState(
    pathname === "/"
      ? {
          bgColor: "transparent",
          textColor: "white",
          position: "fixed",
        }
      : {
          bgColor: "white",
          textColor: "dark",
          position: "sticky",
        }
  );

  const ref = useRef<HTMLDivElement>(null);
  const [colors, setColors] = useState({
    bgColor: styles.bgColor,
    textColor: styles.textColor,
  });
  const handleWindowScroll = useCallback(() => {
    if (!ref.current) return;
    if (window.scrollY > 0) {
      setColors({ bgColor: "white", textColor: "dark" });
    } else {
      setColors({ bgColor: styles.bgColor, textColor: styles.textColor });
    }
  }, [styles]);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [handleWindowScroll]);

  useEffect(() => {
    setStyles(
      pathname === "/"
        ? {
            bgColor: "transparent",
            textColor: "white",
            position: "fixed",
          }
        : {
            bgColor: "white",
            textColor: "dark",
            position: "sticky",
          }
    );
    setColors(
      pathname === "/"
        ? {
            bgColor: "transparent",
            textColor: "white",
          }
        : {
            bgColor: "white",
            textColor: "dark",
          }
    );
  }, [pathname]);

  return (
    <div
      ref={ref}
      className={`bg-${colors.bgColor} lg:h-[74px] ${styles.position} left-0 top-0 w-full z-50 transition-all duration-300`}
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
