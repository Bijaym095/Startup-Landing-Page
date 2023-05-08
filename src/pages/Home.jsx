import { useEffect } from "react";

import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import HelpVideo from "../components/HelpVideo";
import Companies from "../components/Companies";
import About from "../components/About";
import Info from "../components/Info";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Support from "../components/Support";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <MainFeatures />
      <HelpVideo />
      <Companies />
      <About />
      <Info />
      <Reviews />
      <Pricing />
      <Blog />
      <Support />
    </>
  );
};

export default Home;
