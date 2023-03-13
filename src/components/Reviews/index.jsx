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

const Reviews = () => {
  return (
    <section className="section-spacing bg-[#F9FAFF] dark:bg-[#0B113A]">
      <Container>
        <SectionTitleContainer className="mb-12 text-center">
          <h2 className="section-title mb-2">What Our Users Says</h2>
          <p className="text-[1.2rem]">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </SectionTitleContainer>

        <Row className="">
          {reviewsInfo.map((review, index) => (
            <RowItem
              key={index}
              className="mb-8 w-full sm:w-6/12 lg:mb-0 lg:w-4/12"
            >
              <article className="h-full rounded-md bg-white py-8 px-4 text-[#959CB1] dark:bg-[#1d2144]">
                <span className="mb-4 inline-flex gap-2">{review.ratings}</span>

                <em className="block text-[1.2rem] dark:text-white">
                  "{review.desc}"
                </em>

                <span className="my-6 block h-[0.5px] bg-[#959cb1]"></span>

                <div className="flex">
                  <picture>
                    <img src={review.authorImg} alt="" />
                  </picture>

                  <h5 className="pl-4 text-[1.25rem] font-bold text-black dark:text-white">
                    {review.authorName}

                    <span className="block text-[0.8rem] font-normal text-[#959CB1]">
                      {review.authorPosition}
                    </span>
                  </h5>
                </div>
              </article>
            </RowItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
