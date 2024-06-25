import { LogoDark } from "@/uikit/icons/logoDark";
import HamburgerMenu from "@/uikit/icons/HamburgerMenu";
import { useCallback, useEffect, useRef, useState } from "react";
import MobileNav from "./mobileNav";
import { Close } from "@/uikit/icons/Close";
import Link from "next/link";

const HeaderMobile = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [show, setShow] = useState(false);
  const toggleModal = () => () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const toggleBodyScroll = useCallback(() => {
    if (show) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [show]);

  const handleWindowResize = () => {
    if (window.innerWidth >= 1024) {
      setShow(false);
    }
  };

  useEffect(() => {
    toggleBodyScroll();
  }, [toggleBodyScroll]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <div className="w-full lg:hidden flex bg-white px-6 z-50">
        <div className="h-[90px] bg-white w-full flex items-center justify-between">
          <div className="w-auto h-[40px]">
            <Link href="/">
              <LogoDark />
            </Link>
          </div>
          <button onClick={toggleModal()}>
            {show ? <Close /> : <HamburgerMenu />}
          </button>
        </div>

        <div
          className={`fixed top-[90px] left-0 h-[calc(100vh-90px)] w-full bg-white ${show ? "flex" : "hidden"}`}
        >
          <MobileNav />
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
