"use client";
import Image from "next/image";
import { navbarList } from "../constants/header";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { scrollToView } from "../utils";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const headerRef = useRef<any>();
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

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
    <>
      <div
        ref={headerRef}
        className="hidden header-up fixed grid-cols-4 w-full top-0 left-0 py-3 2xl:py-5 px-5 lg:px-20 2xl:px-[150px] z-50"
      >
        <Link href={"https://archibuild.ai"} target="_blank">
          <Image
            src={"/images/logo.png"}
            className="w-[140px] h-[34px] 2xl:w-[180px] 2xl:h-[40px] object-contain"
            width={180}
            height={40}
            priority
            alt="logo"
          />
        </Link>
        <div className="flex col-span-2 gap-5 items-center justify-end">
          {navbarList?.map((nav, index) => {
            return (
              <>
                {!!nav?.key ? (
                  <div
                    key={index}
                    className="hidden lg:block uppercase text-[14px] 2xl:text-[16px] font-bold cursor-pointer"
                    onClick={() => scrollToView(nav.key, router)}
                  >
                    {nav.name}
                  </div>
                ) : (
                  <Link href={nav?.url}>
                    <div
                      key={index}
                      className="hidden lg:block uppercase text-[14px] 2xl:text-[16px] font-bold"
                    >
                      {nav.name}
                    </div>
                  </Link>
                )}
              </>
            );
          })}
        </div>
        <div className="flex lg:hidden items-center justify-end">
          <div
            className="grid w-[25px] h-fit gap-[6px]"
            onClick={() => setShowNavbar(!showNavbar)}
          >
            {[...Array(3)]?.map((_, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-[2px] bg-white rounded-sm"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed block lg:hidden h-full top-0 left-0 bg-[#1C2126] z-40 duration-500 overflow-hidden",
          showNavbar ? "w-full" : "w-[0%]"
        )}
      >
        <div className="grid pt-[80px] px-5 gap-4">
          {navbarList?.map((nav, index) => {
            return (
              <div
                key={index}
                className="uppercase text-[14px] 2xl:text-[16px] font-bold"
              >
                {nav.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
