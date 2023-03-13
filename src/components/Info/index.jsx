import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

import InfoImage from "../../assets/images/info-image.svg";

const Info = () => {
  return (
    <section id="info" className="section-spacing dark:bg-[#090E34]">
      <Container>
        mb-6 font-medium{" "}
        <Row>
          <RowItem
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="w-full md:w-6/12"
          >
            <picture>
              <img src={`${InfoImage}`} alt="info-image" />
            </picture>
          </RowItem>

          <RowItem
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="w-full md:w-6/12"
          >
            <h3 className="mb-2 text-[1.728rem] font-bold text-black dark:text-white">
              Bug free code
            </h3>
            <p className="mb-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <h3 className="mb-2 text-[1.728rem] font-bold text-black dark:text-white">
              Premier support
            </h3>
            <p className="mb-6 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <h3 className="text-dark mb-2 text-[1.728rem] font-bold dark:text-white">
              Regular updates
            </h3>
            <p>
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
              consectetur adipiscing elit setim.
            </p>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
