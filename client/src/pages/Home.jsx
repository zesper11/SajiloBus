import "../index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import RouteFinder from "../components/RouteFinder";
import ClosingSections from "../components/ClosingSections";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <Hero />
        <RouteFinder />
        <Features />
        <ClosingSections />
      </div>
      <Footer />
    </>
  );
};

export default Home;
