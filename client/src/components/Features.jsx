import React from "react";
import { Clock, MapPin, Grid2X2 } from "lucide-react";

const Features = () => {
  const featuresData = [
    {
      title: "Predictable schedules",
      icon: <Clock />,
      disc: "Fixed routes and planned timings mean you can build your day around a commute you actually understand.",
    },

    {
      title: "Pickup where you need",
      icon: <MapPin />,
      disc: "Select a pickup point along the supported route instead of being restricted to a tiny list of stops",
    },
    {
      title: "Plans that fit",
      icon: <Grid2X2 />,
      disc: "Ride for a day, a week or a month. Pick what works for your schedule instead of forcing your routine around a ticket.",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <div className="features-title-group">
          <span className="eyebrow">Why SajiloBus</span>
          <h2>Less waiting.<br />Less guessing.</h2>
        </div>
        <p className="features-intro">
          SajiloBus is designed around the everyday commuter — simple booking,
          predictable routes and a service you can plan around.
        </p>
      </div>
      <div className="features-grid">
        {featuresData.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <span className="feature-icon" aria-hidden="true">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.disc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Features;
