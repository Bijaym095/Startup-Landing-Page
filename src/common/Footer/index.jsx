import { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaChevronUp,
} from "react-icons/fa";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";
import Button from "../../common/Button";

const footerLinksHoverClass =
  "transition-colors duration-300 hover:text-[#4a6cf7]";

const footerLinksTitleClass =
  "mb-4 text-[1.25rem] font-bold text-black dark:text-white md:mb-8";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //toggleVisibility handler for scrollToTopButton
    const toggleVisibiltiy = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibiltiy);

    return () => {
      window.removeEventListener("scroll", toggleVisibiltiy);
    };
  }, []);

  return (
    <footer className="bg-[#4a6cf70d] dark:bg-[#0D133E]">
      <Container
        className={`
         overflow-hidden
         py-[40px] px-4 
         text-base font-medium text-[#959cb1]
         sm:px-8`}
      >
        <Row
          className="flex-col gap-8 sm:flex-row md:gap-0"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {/* social-links */}

          <RowItem className="w-full sm:w-6/12 lg:w-3/12">
            <NavLink
              to="/"
              className="mb-4 inline-block text-black dark:text-white md:mb-8"
            >
              <span>StartUp</span>
            </NavLink>

            <p className="mb-9 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lobortis.
            </p>

            <ul className="flex space-x-4">
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </RowItem>

          {/* social-links */}

          {/* useful-links */}

          <RowItem className="w-full sm:w-6/12  lg:w-3/12 ">
            <h5 className={`${footerLinksTitleClass}`}>Useful Links</h5>

            <ul className="space-y-2">
              <li>
                <NavLink to="blog" className={`${footerLinksHoverClass}`}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="pricing" className={`${footerLinksHoverClass}`}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={`${footerLinksHoverClass}`}>
                  About
                </NavLink>
              </li>
            </ul>
          </RowItem>

          {/* useful-links */}

          {/* terms */}

          <RowItem className="w-full sm:w-6/12  lg:w-3/12">
            <h5 className={`${footerLinksTitleClass}`}>Terms</h5>

            <ul className="space-y-2">
              <li>
                <NavLink to="tos" className={`${footerLinksHoverClass}`}>
                  TOS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="privacypolicy"
                  className={`${footerLinksHoverClass}`}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="refundpolicy"
                  className={`${footerLinksHoverClass}`}
                >
                  Refund Policy
                </NavLink>
              </li>
            </ul>
          </RowItem>

          {/* terms */}

          {/* support & help */}

          <RowItem className="w-full sm:w-6/12  lg:w-3/12">
            <h5 className={`${footerLinksTitleClass}`}>Support & Help</h5>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="opensupportticket"
                  className={`${footerLinksHoverClass}`}
                >
                  Open Support Ticket
                </NavLink>
              </li>
              <li>
                <NavLink to="termsofuse" className={`${footerLinksHoverClass}`}>
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={`${footerLinksHoverClass}`}>
                  About
                </NavLink>
              </li>
            </ul>
          </RowItem>

          {/* support & help */}
        </Row>
      </Container>

      {/* copyright-text */}

      <div className="bg-[#4a6cf71a] dark:bg-[#141C51]">
        <Container className="px-4 py-8 text-center sm:px-8">
          <p className="dark:text-white">&copy; Crafted by UIdeck for You!</p>
        </Container>
      </div>

      {/* copyright-text */}

      {/* scroll to top button */}

      {isVisible && (
        <Button
          onClick={handleScrollToTop}
          className="z-98 fixed right-4 bottom-4"
          size="sm"
          rounded="lg"
          variant="primary"
        >
          <FaChevronUp />
        </Button>
      )}

      {/* scroll to top button */}
    </footer>
  );
};

export default Footer;
