import tw from "twin.macro";

import { Link } from "react-router-dom";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";
import SectionTitleContainer from "../../common/SectionTitleContainer";

import BlogImage1 from "../../assets/images/blog-01.jpg";
import BlogImage2 from "../../assets/images/blog-02.jpg";
import BlogImage3 from "../../assets/images/blog-03.jpg";
import AuthorImage1 from "../../assets/images/author-04.png";
import AuthorImage2 from "../../assets/images/author-01.png";
import AuthorImage3 from "../../assets/images/author-03.png";

const blogInfo = [
  {
    thumbnail: `${BlogImage1}`,
    title: "Best UI components for modern websites",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Samuyl Joshi",
    authorProfession: "Graphic Designer",
    authorImage: `${AuthorImage1}`,
    createdDate: "15 Dec, 2023",
    relatedField: "Computer",
  },
  {
    thumbnail: `${BlogImage2}`,
    title: "9 simple ways to improve your design skills",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Musharof Chy",
    authorProfession: "Content Writer",
    authorImage: `${AuthorImage2}`,
    createdDate: "15 Dec, 2023",
    relatedField: "Design",
  },
  {
    thumbnail: `${BlogImage3}`,
    title: "Tips to quickly improve your coding speed",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    author: "Lethium Deo",
    authorProfession: "Graphic Designer",
    authorImage: `${AuthorImage3}`,
    createdDate: "15 Dec, 2023",
    relatedField: "Computer",
  },
];

const BlogArticle = tw.article`overflow-hidden h-full rounded-lg shadow-lg`;

const Thumbnail = tw.div`relative`;

const ThumbnailTag = tw.span`absolute right-4 top-4 inline-block rounded-lg bg-blue-500 px-4 py-2 text-white`;

const BlogContent = tw.div`p-4 dark:bg-[#1D2144] h-full`;

const Divider = tw.div`h-[0.5px] bg-black mb-8`;

const AuthorContentWrapper = tw.div`flex gap-4 text-black dark:text-white`;

const AuthorDetails = tw.span`block text-[0.8rem]`;

const BlogTimeline = tw.span`block text-[0.8rem]`;

const Blog = () => {
  return (
    <section className="blog section-spacing dark:bg-darkblue">
      <Container>
        <SectionTitleContainer className="mb-14">
          <h2 className="section-title mb-2">Our Latest Blogs</h2>

          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </SectionTitleContainer>

        <Row className="justify-center">
          {blogInfo.map((blog, index) => (
            <RowItem className="mb-10 w-full sm:w-6/12 lg:w-4/12" key={index}>
              <BlogArticle>
                <Thumbnail>
                  <picture>
                    <img
                      className="w-full object-cover"
                      src={`${blog.thumbnail}`}
                      alt=""
                    />
                  </picture>

                  <ThumbnailTag>{blog.relatedField}</ThumbnailTag>
                </Thumbnail>

                <BlogContent>
                  <Link
                    className={`mb-4 inline-block text-[1.2rem] font-bold 
                                duration-300 hover:text-blue-500
                               dark:text-white dark:hover:text-blue-500`}
                    to="/"
                  >
                    {blog.title}
                  </Link>

                  <p className="mb-6">{blog.desc}</p>

                  <Divider></Divider>

                  <AuthorContentWrapper>
                    <picture>
                      <img src={`${blog.authorImage}`} alt="" />
                    </picture>

                    <AuthorDetails>
                      By
                      <Link
                        className="inline-block pl-1 hover:text-blue-500 dark:hover:text-blue-500"
                        to="/"
                      >
                        {blog.author}
                      </Link>
                      <br />
                      <em className="mt-1 inline-block not-italic text-[#959Cb1]">
                        {blog.authorProfession}
                      </em>
                    </AuthorDetails>

                    <BlogTimeline className="block text-[0.8rem]">
                      Date
                      <br />
                      <em className="mt-1 inline-block not-italic text-[#959Cb1]">
                        {blog.createdDate}
                      </em>
                    </BlogTimeline>
                  </AuthorContentWrapper>
                </BlogContent>
              </BlogArticle>
            </RowItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
