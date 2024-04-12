import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useAuth } from "../ProAuth/AuthPro.jsx";
useAuth;
function NavbarToggel() {
  const { isDarkMode, setIsDarkMode } = useAuth();
  //   const [isDarkMode, setIsDarkMode] = useState(false);
  //   useEffect(() => {
  //     if (isDarkMode) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="dark:bg-transparent   ">
        <span className="relative">
          <span className="animate-ping bg-rose-600"></span>
          <span>
            <DarkModeSwitch
              className=" w-5"
              checked={isDarkMode}
              onChange={setIsDarkMode}
            />
          </span>
        </span>
      </div>
    </div>
  );
}

export default NavbarToggel;
