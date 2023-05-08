import { useEffect } from "react";

import AboutHeader from "../components/AboutHeader";
import HomeAbout from "../components/About";
import Info from "../components/Info";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutHeader />
      <HomeAbout />
      <Info />
    </>
  );
};

export default About;
