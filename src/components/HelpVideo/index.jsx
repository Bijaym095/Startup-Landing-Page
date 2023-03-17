import { useState } from "react";

import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import Modal from "../../common/Modal";

import { FaPlay } from "react-icons/fa";

import VideoThumbnailImage from "../../assets/images/video-thumbnail.jpg";

const HelpVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section className="video section-spacing dark:bg-[#090E34]">
      <Container>
        <div data-aos="fade-up" data-aos-once="true" className="text-center">
          <SectionTitleContainer>
            <h2 className="section-title mb-2">We are ready to help</h2>

            <p className="mb-8">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </SectionTitleContainer>

          <div className="relative">
            <picture>
              <img
                className="w-full object-cover"
                src={`${VideoThumbnailImage}`}
                alt="video-thumbnail"
              />
            </picture>

            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4"
              onClick={handleOpen}
            >
              <FaPlay />
            </button>

            <Modal isOpen={isOpen} onClose={handleClose}>
              <div className="h-[80vh] w-[80vh]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/r44RKWyfcFw?autoplay=1&mute=1&controls=1&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fstartup-tailwind.preview.uideck.com%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fstartup-tailwind.preview.uideck.com&widgetid=4"
                  frameborder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HelpVideo;
