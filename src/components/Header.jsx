/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menus = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watchlist", icon: HiPlus },
    { name: "Original", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
  ];
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-2 md:py-4 shadow-xl">
      <div className="flex">
        <img
          src="../../public/images/header-logo.png"
          alt=""
          className="w-[80px] sm:w-[115px] object-cover"
        />
        <ul className="hidden lg:flex  ml-8 gap-8 text-[16px] font-semibold ">
          {menus.map((menu, index) => (
            <li key={index} className="flex items-center cursor-pointer gap-2 ">
              <menu.icon />
              <span className="hover:underline underline-offset-8">
                {menu.name}
              </span>
            </li>
          ))}
        </ul>
        {/* mobile screen */}
        <ul className="flex lg:hidden ml-8 gap-4 sm:gap-8 text-[16px] font-semibold ">
          {menus.map(
            (menu, index) =>
              index < 3 && (
                <li key={index} className="flex items-center cursor-pointer  ">
                  <menu.icon />
                  {/* <span className="hidden lg:flex hover:underline underline-offset-8">
                {menu.name}
              </span> */}
                </li>
              )
          )}
          {/* toggle menu */}
          <div className="flex items-center relative ">
            <HiDotsVertical
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            {toggle ? (
              <div className=" absolute top-16 -left-12 bg-black/80 px-5 py-3 rounded border border-black/20 z-10">
                {menus.map(
                  (menu, index) =>
                    index > 2 && (
                      <li
                        key={index}
                        className="flex items-center cursor-pointer gap-2 py-1"
                      >
                        <menu.icon />
                        <span className="flex hover:underline underline-offset-8">
                          {menu.name}
                        </span>
                      </li>
                    )
                )}
              </div>
            ) : null}
          </div>
        </ul>
      </div>
      <div className="overflow-hidden rounded-full">
        <img
          className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKet-b99huP_BtZT_HUqvsaSz32lhrcLtIDQ&usqp=CAU"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
