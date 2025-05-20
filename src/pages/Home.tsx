import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <FeatureGrid />
        <div className="text-center mt-12">
          <Link
            to="/boundless"
            className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition"
          >
            🚀 Explore Boundless
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
