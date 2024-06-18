import React from "react";
import { Nav } from "./nav";
import { LogoLight } from "@/uikit/icons/logoLight";
import { AuthCTA } from "./authCTA";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <LogoLight />
      <Nav />
      <AuthCTA />
    </div>
  );
};

export default Header;
