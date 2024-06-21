"use client";
import { LogoDark } from "@/uikit/icons/logoDark";
import HamburgerMenu from "@/uikit/icons/HamburgerMenu";

const HeaderMobile = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full lg:hidden flex bg-white px-6">
        <div className="h-[90px] bg-white w-full flex items-center justify-between">
          <div className="w-1/2">
            <LogoDark />
          </div>
          <button>
            <HamburgerMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
