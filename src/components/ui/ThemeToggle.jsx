import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        transition-colors duration-300
        ${
          theme === "light"
            ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }
      `}
    >
      {theme === "light" ? (
        <div className="flex items-center space-x-2">
          <span>Dark</span>
          <IoMdMoon size={19} />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <span>Light</span>
          <IoSunnyOutline size={19} />
        </div>
      )}
    </button>
  );
};

export default ThemeToggle;
