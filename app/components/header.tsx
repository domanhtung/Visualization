"use client";
import Image from "next/image";
import { navbarList } from "../constants/header";
import { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<any>();

  const scrollTrigger = () => {
    if ((window as any)?.pageYOffset > headerRef?.current?.offsetTop) {
      headerRef.current.className = headerRef.current.className?.replace(
        "hidden",
        "header-down"
      );
      headerRef.current.className = headerRef.current.className?.replace(
        "header-up",
        "header-down"
      );
    } else {
      headerRef.current.className = headerRef.current.className?.replace(
        "header-down",
        "header-up"
      );
      headerRef.current.className = headerRef.current.className?.replace(
        "hidden",
        "header-up"
      );
    }
  };

  useEffect(() => {
    if (typeof window === undefined) return;
    scrollTrigger();
    window.addEventListener("scroll", scrollTrigger, { passive: true });
    return () => window.removeEventListener("scroll", scrollTrigger);
  }, []);

  return (
    <div
      ref={headerRef}
      className="hidden header-up fixed grid-cols-4 w-full top-0 left-0 py-5 px-[150px] z-50"
    >
      <Image
        src={"/images/logo.png"}
        width={180}
        height={40}
        priority
        alt="logo"
      />
      <div className="flex col-span-2 gap-5 items-center justify-end">
        {navbarList?.map((nav, index) => {
          return (
            <div key={index} className="uppercase font-bold">
              {nav.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
