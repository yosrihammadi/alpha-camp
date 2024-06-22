import React from "react";
import Contact from "./contact";
import Links from "./links";
import NewsLetter from "./newsLetter";
import { LogoLight } from "@/uikit/icons/logoLight";
import Policies from "./policies";
import Socials from "./socials";

const Footer = () => {
  return (
    <div className="bg-green-950 py-10 px-6 lg:px-0">
      <div className="max-w-[1250px] mx-auto">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <Contact />
            <Links />
            <NewsLetter />
          </div>
          <hr className="border-blue-900 my-6" />
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mt-auto mx-auto lg:mx-0 mb-6 lg:mb-0">
              <LogoLight />
            </div>
            <Policies />
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
