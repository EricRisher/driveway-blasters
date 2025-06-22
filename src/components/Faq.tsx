"use client";

import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

const Faq: React.FC = () => {
  return (
    <section className="faq-wrapper">
      <h2 className="faq-header">Frequently Asked Questions </h2>
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do you price your services?</Accordion.Header>
          <Accordion.Body>
            Our pricing is based on the size and type of property, as well as
            the specific services required. We offer free, no-obligation quotes
            to provide you with accurate pricing tailored to your needs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            What is the difference between high-pressure washing and soft
            washing?
          </Accordion.Header>
          <Accordion.Body>
            High-pressure washing uses high-velocity water spray to remove dirt
            from hard surfaces like driveways and decks. Soft washing, on the
            other hand, uses lower pressure along with specialized cleaning
            solutions to gently clean more delicate surfaces like house sidings
            and roofs without causing damage.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Is pressure washing safe for all types of surfaces?
          </Accordion.Header>
          <Accordion.Body>
            Pressure washing is a versatile cleaning method, but not all
            surfaces require or tolerate high pressure. We adjust our techniques
            based on the material to ensure the best results without damage. For
            sensitive surfaces, we recommend soft washing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How long does the pressure washing process take?
          </Accordion.Header>
          <Accordion.Body>
            The duration depends on the size of the area and the type of
            cleaning required. Most residential jobs are completed within a few
            hours, while larger commercial projects may take longer.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Do I need to be home during the pressure washing service?
          </Accordion.Header>
          <Accordion.Body>
            While it is not necessary for you to be home, we do require access
            to the area being cleaned. If any specific instructions or access
            needs are involved, we appreciate prior arrangement.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            What preparations should I make before your arrival?
          </Accordion.Header>
          <Accordion.Body>
            We recommend removing any personal belongings, decorations, or
            sensitive items from the area to be cleaned. Also, ensure that all
            windows and doors are closed securely.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How often should I have my property pressure washed?
          </Accordion.Header>
          <Accordion.Body>
            We generally recommend pressure washing at least once a year to
            maintain the appearance and integrity of your property. However,
            this can vary based on your location and environmental factors such
            as exposure to dirt and weather conditions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Can pressure washing remove all stains?
          </Accordion.Header>
          <Accordion.Body>
            Pressure washing is highly effective for most dirt, mold, mildew,
            and algae. However, some stains like oil or rust may require
            additional treatments or specialized cleaning agents.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Are We Insured?</Accordion.Header>
          <Accordion.Body>
            Yes, we are 100% insured. This is one of the main things you should
            look for when hiring a business. Uninsured and unlicensed
            contractors can cause some serious damage to your home. Leave it to
            the insured professionals.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            Can you give me a quote without coming to my house?
          </Accordion.Header>
          <Accordion.Body>
            Yes, we can! If you can provide us with your address we can
            virtually quote through Google Earth. Also, a description of the
            work and photos make it a lot easier to provide you with an accurate
            quote
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Link href="/contact" className="button btn-primary btn-faq" passHref>
        Get Your Free Quote!
      </Link>
    </section>
  );
};

export default Faq;
