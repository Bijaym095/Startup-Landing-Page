import React from "react";
import { Link } from "react-router-dom";

import Container from "../../common/Container";

import CompanyImage1 from "../../assets/brands/uideck.svg";
import CompanyImage2 from "../../assets/brands/tailgrids.svg";
import CompanyImage3 from "../../assets/brands/lineicons.svg";
import CompanyImage4 from "../../assets/brands/ayroui.svg";
import CompanyImage5 from "../../assets/brands/plainadmin.svg";

const imageLinkHoverClass =
  "object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0 lg:max-w-[130px]";

const Companies = () => {
  return (
    <section className="companies section-spacing dark:bg-darkblue">
      <Container>
        {/* wrapper */}

        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex flex-wrap items-center justify-center gap-8 rounded-lg bg-[#1D2144] p-8"
        >
          <Link
            target="_blank"
            to="https://uideck.com/"
            className={`${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage1}`} alt="uideck" />
          </Link>

          <Link
            target="_blank"
            to="https://tailgrids.com/"
            className={`${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage2}`} alt="tailgrids" />
          </Link>

          <Link
            target="_blank"
            to="https://lineicons.com/"
            className={`${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage3}`} alt="lineicons" />
          </Link>

          <Link
            target="_blank"
            to="https://ayroui.com/"
            className={`${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage4}`} alt="ayroui" />
          </Link>

          <Link
            target="_blank"
            to="https://plainadmin.com/"
            className={`${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage5}`} alt="plainadmin" />
          </Link>
        </div>

        {/* wrapper */}
      </Container>
    </section>
  );
};

export default Companies;
