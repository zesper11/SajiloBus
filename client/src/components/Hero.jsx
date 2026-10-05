import assets from "../assets/assets";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8 md:flex-row md:gap-1">
      <div className="flex w-full flex-col justify-center gap-3 pr-1 md:w-1/3">
        <h1 className="text-3xl font-medium">
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
      <div className="flex w-full justify-center md:w-2/3">
        <img src={assets.HeroBus} className="h-auto w-full" alt="hero bus" />
      </div>
    </section>
  );
};

export default Hero;
