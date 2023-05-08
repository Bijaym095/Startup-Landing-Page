import { useEffect } from "react";

import ContactHeader from "../components/ContactHeader";
import Support from "../components/Support";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ContactHeader />
      <Support />
    </>
  );
};

export default Contact;
