"use client";

import { useThemeContext } from "@/context/themeContext";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeContext();

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
  };

  return (
    <header className="py-10 px-10 text-xl container mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotels
        </Link>

        <ul className="flex items-center ml-4 md:ml-6 gap-4 md:gap-6">
          <li className="flex items-center rounded-full border-transparent hover:border-gray-400 border-2">
            <Link className="p-1 rounded-full" href="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="flex items-center rounded-full border-transparent hover:border-gray-400 border-2">
            <button className="p-1 rounded-full">
              {isDarkTheme ? (
                <MdOutlineLightMode
                  className="cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <MdDarkMode className="cursor-pointer" onClick={toggleTheme} />
              )}
            </button>
          </li>
        </ul>
      </div>

      <nav className="">
        <ul className="flex items-center justify-between mt-4 gap-6 md:gap-12">
          <li className="hover:-translate-y-2 duration-500 transition-transform">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-transform">
            <Link href="/rooms">Rooms</Link>
          </li>
          <li className="hover:-translate-y-2 duration-500 transition-transform">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
