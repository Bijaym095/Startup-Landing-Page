import tw from "twin.macro";

import { LinkButton } from "../../common/Button";
import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";

const ButtonContainer = tw.div`space-x-4 md:space-x-6`;

const Hero = () => {
  return (
    <section id="hero" className="hero section-spacing dark:bg-[#090E34]">
      <Container className="text-center">
        <SectionTitleContainer
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
        >
          <h1
            className={`mb-[20px] text-[2.488rem]
              font-bold 
             dark:text-white 
             sm:mb-5 md:text-[3rem]`}
          >
            Startup Focused <br /> Tailwind CSS Template
          </h1>

          <p className="mb-12 text-[1.2rem] font-medium dark:text-slate-400">
            A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS,
            Business, Software and Agencies. Comes with high-quality design and
            everything you need!
          </p>

          <ButtonContainer>
            <LinkButton variant="primary" rounded="lg">
              Get Started
            </LinkButton>

            <LinkButton variant="secondary" rounded="lg">
              Learn More
            </LinkButton>
          </ButtonContainer>
        </SectionTitleContainer>
      </Container>
    </section>
  );
};

export default Hero;
