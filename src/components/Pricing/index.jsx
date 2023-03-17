import tw from "twin.macro";

import { NavLinkButton } from "../../common/Button";
import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";
import SectionTitleContainer from "../../common/SectionTitleContainer";

const PricingInfo = [
  {
    plan: "Lite",
    pricing: "$40",
    desc: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
  },
  {
    plan: "Basic",
    pricing: "$399",
    desc: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
  },
  {
    plan: "Plus",
    pricing: "$589",
    desc: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
    features: [
      "All UI Components",
      "Use with Unlimited Projects",
      "Commercial Use",
      "Email Support",
      "Lifetime Access",
      "Free Lifetime Updates",
    ],
  },
];

const Header = tw.div`mb-4 flex justify-between font-bold dark:text-white`;

const Divider = tw.div`h-[0.5px] bg-slate-500`;

const Pricing = () => {
  return (
    <section id="pricing" className="section-spacing dark:bg-darkblue">
      <Container>
        <SectionTitleContainer className="mb-14">
          <h2 className="section-title">Simple and Affordable Pricing</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </SectionTitleContainer>

        <Row>
          {PricingInfo.map(({ pricing, plan, features, desc }, index) => (
            <RowItem className="w-full sm:w-6/12 lg:w-4/12" key={index}>
              <article
                key={index}
                className="mb-8 rounded-lg py-6 px-4 shadow-lg dark:bg-[#1D2144]"
              >
                <Header>
                  <h3 className="text-[1.728rem]">
                    {pricing}
                    <span>/mo</span>
                  </h3>

                  <h4 className="text-[1.2rem]">{plan}</h4>
                </Header>

                <p className="mb-4">{desc}</p>

                <NavLinkButton
                  to="/"
                  className="mb-8 block w-full text-center"
                  variant="primary"
                  rounded="lg"
                >
                  Start Free Tial
                </NavLinkButton>

                <Divider></Divider>

                <ul className="mt-8 space-y-2 text-[#959cb1]">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </article>
            </RowItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
