// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logo from "../assets/react.svg";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

function navbar() {
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Tour Events" },
    { id: 3, text: "Testimonals" },
    { id: 4, text: "Story Mode" },
    { id: 5, text: "Tour" },
    { id: 6, text: "Sign Up" },
  ];

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="md:flex justify-between mt-5  items-center px-6  hidden">
        <img src={logo} alt="logo" />
        <div className="flex gap-5 cursor-pointer   ">
          <ul className="flex gap-7 ">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={` hover:border-b border-slate-50 pb-2 before:`}
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex md:hidden justify-between px-3 mt-4">
        <img src={logo} alt="logo" />
        <div onClick={handleNav}>
          {nav ? <MdClose size={30} /> : <IoMdMenu size={30} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? "absolute z-20 md:hidden left-0 top-3 w-[40%] h-[100%] bg-black ease-in-out duration-500"
            : "ease-in-out duration-500 fixed top-0 left-[-100%]"
        }
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className={` hover:border-b border-slate-50 pb-4 before:`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default navbar;
