import { Link } from "react-router-dom";

import Container from "../../common/Container";
import { buttonVariants } from "../../common/Button";

const Hero = () => {
  return (
    <section id="hero" className="hero section-spacing dark:bg-red-700">
      <Container className="text-center">
        <div className="sm:max-w-[80%] sm:mx-auto">
          <h1 className="font-bold leading-[1.25] text-[30px] sm:text-[3rem] mb-[20px] sm:mb-5 dark:text-white">
            Startup Focused <br /> Tailwind CSS Template
          </h1>

          <p className="font-medium text-[1.125rem] sm:text-lg mb-12 dark:text-white">
            A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS,
            Business, Software and Agencies. Comes with high-quality design and
            everything you need!
          </p>
        </div>

        <div className="space-x-4">
          <Link
            to="/"
            className={buttonVariants({
              variant: "primary",
              rounded: "lg",
            })}
            role="button"
            type="button"
          >
            Get Started
          </Link>

          <Link
            className={buttonVariants({
              variant: "secondary",
              rounded: "lg",
              className: "dark:text-white",
            })}
            to="#main-features"
            role="button"
            type="button"
          >
            Learn More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
