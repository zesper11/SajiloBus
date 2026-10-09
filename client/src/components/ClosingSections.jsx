import { ArrowRight, Quote } from "lucide-react";

const ClosingSections = () => {
  return (
    <>
      <section className="closing-quote" aria-label="Our approach">
        <div className="closing-quote-content">
          <span className="quote-icon" aria-hidden="true">
            <Quote size={20} fill="currentColor" />
          </span>
          <h2>
            A better commute doesn&apos;t need to be complicated. It just needs
            to work.
          </h2>
          <p>SajiloBus — built for everyday journeys.</p>
        </div>
      </section>

      <section className="closing-cta" aria-labelledby="closing-cta-title">
        <div className="closing-cta-copy">
          <h2 id="closing-cta-title">
            Ready to make your
            <br />
            commute simpler?
          </h2>
          <p>Find a route, choose your pickup point and get moving.</p>
        </div>
        <a className="primary-btn" href="#routeFinder">
          Find a Route <ArrowRight size={17} />
        </a>
      </section>
    </>
  );
};

export default ClosingSections;
