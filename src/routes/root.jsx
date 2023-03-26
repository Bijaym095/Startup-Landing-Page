import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Aos from "aos";
import "../../node_modules/aos/dist/aos.css";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Root = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
