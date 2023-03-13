import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

// import DarkModeState from "../context/DarkMode/DarkModeState";

const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    // <DarkModeState>
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
    // </DarkModeState>
  );
};

export default Root;
