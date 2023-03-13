import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";

import VideoThumbnailImage from "../../assets/images/video-thumbnail.jpg";

const HelpVideo = () => {
  return (
    <section id="pricing" className="video section-spacing dark:bg-[#090E34]">
      <Container>
        <div data-aos="fade-up" data-aos-once="true" className="text-center">
          <SectionTitleContainer>
            <h2 className="section-title">We are ready to help</h2>

            <p className="mb-8 sm:text-lg">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </SectionTitleContainer>

          {/* modal-thumbnail */}

          <div>
            <img
              className="w-full object-cover"
              src={`${VideoThumbnailImage}`}
              alt="video-thumbnail"
            />
          </div>

          {/* modal-thumbnail */}
        </div>
      </Container>
    </section>
  );
};

export default HelpVideo;
