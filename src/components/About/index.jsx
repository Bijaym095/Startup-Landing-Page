import { TiTick } from "react-icons/ti";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

import AboutImage from "../../assets/images/about-image.svg";

const aboutInfo = [
  { desc: "Premium quality" },
  { desc: "Regular updates" },
  { desc: "No code required" },
  { desc: "Rich documentation" },
  { desc: "Use for lifetime" },
  { desc: "Developer friendly" },
];

const About = () => {
  return (
    <section id="about" className="section-spacing dark:bg-[#090E34]">
      <Container>
        <Row>
          <RowItem
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="mb-10 w-full sm:mb-0 md:w-6/12"
          >
            <h2 className="mb-2 text-[1.953rem] font-bold dark:text-white">
              Crafted for Startup, SaaS and Business Sites.
            </h2>

            <p className="mb-8 font-medium">
              The main ‘thrust’ is to focus on educating attendees on how to
              best protect highly vulnerable business applications with
              interactive panel discussions and roundtables.
            </p>

            <ul className="space-y-2 sm:columns-2">
              {aboutInfo.map((info, index) => (
                <li
                  className="flex items-center font-medium text-[#959cb1]"
                  key={index}
                >
                  <span className="mr-4 rounded-md bg-blue-200 p-2 text-blue-500">
                    <TiTick />
                  </span>
                  {info.desc}
                </li>
              ))}
            </ul>
          </RowItem>

          <RowItem
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="700"
            className="w-full md:w-6/12"
          >
            <picture>
              <img src={`${AboutImage}`} alt="about-image" />
            </picture>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default About;
