import assets from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>
          Your daily commute, made simple.
        </h1>
        <p>
          Choose where you want to get picked up, choose your plan, and leave
          the rest to SajiloBus
        </p>
        <div>
          <button className="primary-btn">
            Find a Route <ArrowRight />
          </button>
        </div>
      </div>
      <img src={assets.HeroBus} className="hero-image" alt="SajiloBus on the road" />
    </section>
  );
};

export default Hero;
