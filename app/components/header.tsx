import Image from "next/image";
import { navbarList } from "../constants/header";

const Header = () => {
  return (
    <div className="fixed grid grid-cols-4 w-full top-0 left-0 py-6 px-[150px] z-50">
      <Image
        src={"/images/logo.png"}
        width={200}
        height={45}
        priority
        alt="logo"
      />
      <div className="flex col-span-2 gap-5 items-center justify-center">
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
