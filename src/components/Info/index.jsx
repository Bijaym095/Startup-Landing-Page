import tw from "twin.macro";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

import InfoImage from "../../assets/images/info-image.svg";

const InfoTitle = tw.h3`mb-2 text-[1.728rem] font-bold text-black dark:text-white`;

const InfoText = tw.p`mb-6 font-medium`;

const Info = () => {
  return (
    <section id="info" className="section-spacing dark:bg-[#090E34]">
      <Container>
        <Row>
          <RowItem
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="mb-4 w-full md:w-6/12"
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
            <InfoTitle>Bug free code</InfoTitle>
            <InfoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </InfoText>

            <InfoTitle>Premier support</InfoTitle>
            <InfoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </InfoText>

            <InfoTitle>Regular updates</InfoTitle>
            <InfoText>
              Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
              consectetur adipiscing elit setim.
            </InfoText>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default Info;
