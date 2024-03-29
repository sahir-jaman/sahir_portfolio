// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack } from "@fortawesome/free-brands-svg-icons";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const menuOptions = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Achievements",
    link: "/achievements",
  },
  {
    title: "Experience",
    link: "/experience",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "Contact Me",
    link: "/contactme",
  },
];

function Header() {
  const [isMenueOpen, setIsMenueOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenueOpen((prevState) => !prevState);
  };

  return (
    <div>
      <section
        id="desktop_navbar"
        className="hidden md:flex justify-between px-[170px] py-5 text-[18px] text-[white] bg-red-"
      >
        <div
          id="logo"
          className="border-solid rounded-full text-[#2ecc71] "
        >
          <FontAwesomeIcon icon={faSlack} className="text-[45px]" />
        </div>
        <ul className="flex gap-14 font-semibold pt-2">
          {menuOptions.map((item, index) => (
            <li
              key={index}
              className={`${
                index === menuOptions.length - 1
                  ? "px-3 rounded-3xl pb-[-3px] text-[#2ecc71] hover:text-white hover:border-white"
                  : "hover:text-[#2ecc71]"
              } transition ease-in-out duration-200`}
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="mobile_navbar"
        className="md:hidden flex justify-between px-[20px] py-10 text-[22px] text-[white]"
      >
        <div
          id="logo"
          className="border-solid border-red-500 rounded-full text-[#2ecc71]"
        >
          <FontAwesomeIcon icon={faSlack} className="text-[40px]" />
        </div>
        <div
          className="relative text-[#2ecc71] text-[35px]"
          onClick={toggleMenu}
        >
          {isMenueOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>
        <div
          className={
            isMenueOpen
              ? "block absolute right-[60px] transition transform duration-1000 ease-in-out bg-[#0E1314] mt-1.5 rounded-lg z-50"
              : "hidden"
          }
        >
          <ul className="">
            {menuOptions.map((item, index) => (
              <li key={index} className="hover:text-[#2ecc71] pb-2 p-2 px-4">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Header;
