import tw from "twin.macro";

import { AiFillStar } from "react-icons/ai";

import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import Row, { RowItem } from "../../common/Row";

import AuthorImage1 from "../../assets/images/author-01.png";
import AuthorImage2 from "../../assets/images/author-02.png";
import AuthorImage3 from "../../assets/images/author-03.png";

const starFillColor = "text-yellow-400";

const reviewsInfo = [
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage1}`,
    authorName: "Musharof Chy",
    authorPosition: "Founder @TailGrids",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage2}`,
    authorName: "Devid Weilium",
    authorPosition: "Founder @UIdeck",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    authorImg: `${AuthorImage3}`,
    authorName: "Lethium Frenci",
    authorPosition: "Founder @Lineicons",
  },
];

const AuthorName = tw.h5`
  pl-4 text-[1.25rem] font-bold text-black dark:text-white`;

const AuthorPosition = tw.span`block text-[0.8rem] font-normal text-[#959CB1]`;

const AuthorWrapper = tw.div`flex`;

const ReviewRating = tw.div`mb-6 inline-flex gap-2`;

const ReviewsDesc = tw.div`dark:text-white`;

const Divider = tw.span`my-10 block h-[0.5px] bg-[#959cb1]`;

const Reviews = () => {
  return (
    <section className="section-spacing bg-[#F9FAFF] dark:bg-[#0B113A]">
      <Container>
        <SectionTitleContainer className="mb-14 text-center">
          <h2 className="section-title mb-2">What Our Users Says</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </SectionTitleContainer>

        <Row>
          {reviewsInfo.map((review, index) => (
            <RowItem
              key={index}
              className="mb-8 w-full sm:w-6/12 lg:mb-0 lg:w-4/12"
            >
              <article
                className={`
                  h-full rounded-md bg-white py-8 px-4
                 text-[#959CB1] shadow-lg
                 dark:bg-[#1d2144]`}
              >
                <ReviewRating>{review.ratings}</ReviewRating>

                <ReviewsDesc>{review.desc}</ReviewsDesc>

                <Divider></Divider>

                <AuthorWrapper>
                  <picture>
                    <img src={review.authorImg} alt="" />
                  </picture>

                  <AuthorName>
                    {review.authorName}
                    <AuthorPosition>{review.authorPosition}</AuthorPosition>
                  </AuthorName>
                </AuthorWrapper>
              </article>
            </RowItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
