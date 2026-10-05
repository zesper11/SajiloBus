import "../index.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex min-h-[calc(100vh-2rem)] flex-col">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
