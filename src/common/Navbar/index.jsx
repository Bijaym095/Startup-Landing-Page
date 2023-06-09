import { useEffect, useState } from "react";
import tw from "twin.macro";
import clsx from "clsx";

import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { CiDark, CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

import Container from "../../common/Container";
import Button, { NavLinkButton } from "../../common/Button";
import Dropdown from "../../common/Dropdown";

const ButtonContainer = tw.div`flex items-center space-x-1 xl:space-x-4`;

const dropdownLinks = [
  { to: "/about", label: "About Page" },
  { to: "/contact", label: "Contact Page" },
  { to: "/", label: "Blog Grid Page" },
  { to: "/", label: "Sign in" },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleNav = () => {
    return setToggleNav((value) => !value);
  };

  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const { hash } = useLocation();

  //handling Navigation if url contains id
  useEffect(() => {
    const handleNavigation = () => {
      if (hash) {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleNavigation();
  }, [hash]);

  // handling scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav").clientHeight;

      scrollY >= navbarHeight ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // adding the classlist "dark" to the root whenever the darkMode is toggled
  useEffect(() => {
    const root = document.querySelector("#root");

    isDarkMode
      ? root.classList.remove("light") || root.classList.add("dark")
      : root.classList.remove("dark") || root.classList.add("light");
  }, [isDarkMode]);

  return (
    <nav
      className={`
        ${isSticky ? "sticky top-0 z-50" : ""}
        ${
          isSticky
            ? "bg-[#ffffffcc] drop-shadow-lg backdrop-blur dark:bg-[#4a6cf733]"
            : "bg-transparent dark:bg-darkblue"
        }
         duration-200 ease-linear
`}
    >
      <Container
        className={`
            flex items-center justify-between gap-4
            py-4 px-4
            sm:px-8`}
      >
        {/* logo */}
        <NavLink
          to="/"
          className={`
                 inline-flex items-center
                 font-medium text-gray-900
                dark:text-white`}
        >
          <span className="text-xl">Startup</span>
        </NavLink>

        {/* logo */}

        <div
          className={clsx(
            "fixed z-[99] md:static",
            `inset-0 ${toggleNav ? "left-0" : "left-[-250px]"}`,
            "h-screen w-[250px] bg-blue-500 py-[48px] px-[24px] md:h-full",
            "duration-300 ease-in-out",
            "text-white dark:text-white md:bg-transparent md:py-0 md:px-0 md:text-black"
          )}
        >
          <ul className="space-y-4 md:flex md:space-y-0 md:space-x-2 lg:space-x-4">
            <li>
              <Link to="/#hero" tabIndex={toggleNav ? 0 : -1}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/#about" tabIndex={toggleNav ? 0 : -1}>
                About
              </Link>
            </li>

            <li>
              <Link to="/#pricing" tabIndex={toggleNav ? 0 : -1}>
                Pricing
              </Link>
            </li>

            <li>
              <Link tabIndex={toggleNav ? 0 : -1} to="/#support">
                Support
              </Link>
            </li>

            <li>
              <Dropdown
                tabIndex={toggleNav ? 0 : 1}
                button="Pages"
                links={dropdownLinks}
              />
            </li>
          </ul>
        </div>

        <ButtonContainer>
          <NavLinkButton
            to="signin"
            size="sm"
            rounded="lg"
            className="hidden bg-white shadow-lg sm:block"
          >
            Sign In
          </NavLinkButton>

          <NavLinkButton
            to="signup"
            variant="primary"
            size="sm"
            rounded="lg"
            className="hidden shadow-lg sm:block"
          >
            SignUp
          </NavLinkButton>

          <Button
            onClick={handleDarkMode}
            className="bg-white text-2xl font-bold text-black shadow-lg"
            rounded="lg"
            size="sm"
          >
            {isDarkMode ? <CiLight /> : <CiDark />}
          </Button>

          <Button
            size="sm"
            rounded="lg"
            className="shadow-lg md:hidden"
            onClick={handleToggleNav}
          >
            {toggleNav ? <FaTimes /> : <FaBars />}
          </Button>
        </ButtonContainer>
      </Container>
    </nav>
  );
};

export default Navbar;
