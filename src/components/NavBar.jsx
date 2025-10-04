import { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";
import ThemeToggleButton from "./ui/theme-toggle-button"
import Logo from "./ui/Logo";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuBtn = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  };

  return (
    <div className="flex items-center justify-center p-4 shadow-md z-30 bg-bg-primary">
      <div className="flex items-center justify-between w-11/12">
        <div className=" flex items-center justify-start">
          <Logo />
        </div>

        <div className="hidden md:flex items-center justify-end space-x-4">
          <Link
            to="/"
            className="navLink text-text-primary text-base font-medium"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('download')}
            className="navLink text-text-primary text-base font-medium cursor-pointer"
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="navLink text-text-primary text-base font-medium cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="navLink text-text-primary text-base font-medium cursor-pointer"
          >
            Contact
          </button>
          <ThemeToggleButton showLabel variant="circle" start="center" />
        
        </div>
        <div
          className={twMerge(
            "flex items-center md:hidden space-x-4",
            showMenu && "hidden"
          )}
        >
         <ThemeToggleButton />

          <button onClick={handleMenuBtn}>
            <FaBars className="text-2xl cursor-pointer text-text-primary" />
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "fixed z-50 block md:hidden bg-btn-secondary/10 backdrop-blur-md top-0 right-0 h-screen shadow-md w-[300px] overflow-hidden transition duration-300",
          showMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-end pt-5 pr-8">
          <button onClick={handleMenuBtn}>
            <FaX className="text-2xl cursor-pointer text-text-primary " />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 p-6">
          <Link
            to="/"
            onClick={() => setShowMenu(false)}
            className="navLink w-full text-text-primary text-base font-medium"
          >
            Home
          </Link>
          <button
            onClick={() => scrollToSection('download')}
            className="navLink w-full text-text-primary text-base font-medium cursor-pointer text-left"
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="navLink w-full text-text-primary text-base font-medium cursor-pointer text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="navLink w-full text-text-primary text-base font-medium cursor-pointer text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
