import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

// const featuresInfo = [{}]

const MainFeatures = () => {
  return (
    <section id="main-features" className="main-features section-spacing">
      <Container className="text-center">
        <h2>Main Features</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <Row>
          <RowItem className="w-full sm:w-6/12 md:4/12"></RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default MainFeatures;
