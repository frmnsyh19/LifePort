"use client";

import React, {
  useState,
  useEffect,
} from "react";
import Dawer from "./Dawer";
import Image from "next/image";

const NavbarMobile = () => {
  const [isScrolled, setIsScrolled] =
    useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <div
        className={`fixed navbar p-2 lg:hidden flex justify-between items-center top-0 left-0 w-full z-50 transition-all duration-300 
      ${
        isScrolled
          ? "bg-indigo-900 shadow-lg"
          : "bg-transparent"
      }`}>
        <div className=" p-1">
          <Dawer />
        </div>
        {isScrolled ? (
          <>
            <div className="p-1">
              <Image
                width={150}
                height={150}
                alt="logo lifeport"
                src="/image/imgmobile.png"
              />
            </div>
          </>
        ) : (
          ""
        )}
        {isScrolled ? (
          <>
            <div className=" p-2">
              <Image
                src="/image/logo.png"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavbarMobile;
