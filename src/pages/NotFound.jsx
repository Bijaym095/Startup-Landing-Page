// import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";

const NotFound = () => {
  return (
    <section className="section-spacing dark:bg-darkblue">
      <Container className="text-center">
        <span className="block text-[2.488rem] font-bold dark:text-white">
          404
        </span>
        <h3 className="section-title mb-2">Sorry, the page can’t be found</h3>
        <p className="mb-6">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>

        <Button variant="primary" size="sm" rounded="lg">
          Back to Homepage
        </Button>
      </Container>
    </section>
  );
};

export default NotFound;
