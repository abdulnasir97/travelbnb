import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavbar = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="font-olive text-white font-bold text-4xl z-20">Island Vacay</h1>
      <RiMenu4Line
        onClick={handleNavbar}
        className="z-20 text-white cursor-pointer"
        size={40}
      />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-400 left-0 top-0 w-full h-screen bg-black/75 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Amenities</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
