import React from "react";
import { Nav } from "./nav";
import { LogoLight } from "@/uikit/icons/logoLight";
import { AuthCTA } from "./authCTA";
import HeaderMobile from "../headerMobile";

const Header = () => {
  return (
    <>
      <HeaderMobile />
      <div className="items-center justify-between py-3 hidden lg:flex">
        <LogoLight />
        <Nav />
        <AuthCTA />
      </div>
    </>
  );
};

export default Header;
