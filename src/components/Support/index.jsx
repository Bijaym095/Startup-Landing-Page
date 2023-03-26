import tw from "twin.macro";

import Row, { RowItem } from "../../common/Row";
import Container from "../../common/Container";
import Button from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";

const TicketFormContainer = tw.article`p-8 bg-[#F9FAFF] rounded-lg dark:bg-[#1D2144]`;
const NewsLetterContainer = tw.article`p-8 bg-[#F9FAFF] rounded-lg dark:bg-[#1D2144]`;

const Support = () => {
  return (
    <section
      id="support"
      className="section-spacing dark:bg-darkblue dark:text-white"
    >
      <Container>
        <Row className="gap-8 md:gap-0">
          <RowItem className="mb-2 w-full lg:mb-0 lg:w-8/12">
            <TicketFormContainer>
              <h4 className="mb-2 text-[1.563rem] font-bold">
                Need Help? Open a Ticket
              </h4>

              <p className="mb-8">
                Our support team will get back to you ASAP via email.
              </p>

              <form className="grid gap-8 sm:grid-cols-2 " action="">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <Input
                    id="email"
                    className="block"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="message">Your Message</label>
                  <TextArea placeholder="Your message here"></TextArea>
                </div>

                <div className="col-span-2">
                  <Button
                    type="submit"
                    variant="primary"
                    rounded="lg"
                    size="sm"
                  >
                    Submit Ticket
                  </Button>
                </div>
              </form>
            </TicketFormContainer>
          </RowItem>

          <RowItem className="w-full lg:w-4/12">
            <NewsLetterContainer>
              <h4 className="mb-2 text-[1.563rem] font-bold">
                Subscribe to receive future updates
              </h4>

              <p className="mb-8">
                Lorem ipsum dolor sited Sed ullam corper consectur adipiscing
                Mae ornare massa quis lectus.
              </p>

              <div></div>

              <form className="mb-6 grid gap-4" action="">
                <div>
                  <Input type="text" placeholder="Enter your name" required />
                </div>

                <div>
                  <Input type="email" placeholder="Enter your email" required />
                </div>

                <div className="mt-2">
                  <Button
                    className="block w-full"
                    variant="primary"
                    size="sm"
                    rounded="lg"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>

              <p>No spam guaranteed, So please don’t send any spam mail.</p>
            </NewsLetterContainer>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default Support;
