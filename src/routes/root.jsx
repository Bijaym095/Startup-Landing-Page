import { Outlet } from "react-router-dom";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

import DarkModeState from "../context/DarkMode/DarkModeState";

const Root = () => {
  return (
    <DarkModeState>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </DarkModeState>
  );
};

export default Root;
