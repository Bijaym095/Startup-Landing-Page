import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

import { CiDark, CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

import Container from "../../common/Container";
import Button, { buttonVariants } from "../../common/Button";

import DarkModeContext from "../../context/DarkMode/DarkModeContext";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleToggle = () => {
    return setToggleNav((value) => !value);
  };

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const root = document.querySelector("#root");

    darkMode
      ? root.classList.remove("light") || root.classList.add("dark")
      : root.classList.remove("dark") || root.classList.add("light");
  }, [darkMode]);

  return (
    <nav className="text-gray-600 body-font">
      <Container className="flex justify-between items-center py-4 gap-4">
        {/* logo */}
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Startup</span>
        </Link>

        {/* links-container */}
        <div
          className={clsx(
            `fixed sm:static`,
            `inset-0 ${toggleNav ? "left-0" : "left-[-250px]"}`,
            "bg-blue-500 sm:bg-transparent w-[250px] h-full",
            "py-[45px] px-[25px] sm:py-0 sm:px-0",
            "ease-in-out duration-300"
          )}
        >
          <ul className="sm:flex sm:space-x-4">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink>Pricing</NavLink>
            </li>

            <li>
              <NavLink>Blog</NavLink>
            </li>

            <li>
              <NavLink>About</NavLink>
            </li>

            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* nav-cta */}
        <div className="space-x-2 sm:space-x-4">
          <NavLink
            to="signin"
            className={buttonVariants({
              variant: "primary",
              rounded: "md",
              size: "sm",
              className: "align-middle",
            })}
          >
            Sign In
          </NavLink>

          <NavLink
            to="signup"
            className={buttonVariants({
              variant: "primary",
              rounded: "md",
              size: "sm",
              className: "align-middle",
            })}
          >
            Sign Up
          </NavLink>

          <Button
            onClick={handleDarkMode}
            className="align-middle text-2xl"
            rounded="lg"
            size="sm"
          >
            {darkMode ? <CiLight /> : <CiDark />}
          </Button>

          <Button
            size="sm"
            className="align-middle md:hidden"
            onClick={handleToggle}
          >
            {toggleNav ? <FaTimes /> : <FaBars />}
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
