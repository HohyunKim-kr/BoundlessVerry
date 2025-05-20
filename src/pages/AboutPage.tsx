import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import ResearchSummary from "../components/ResearchSummary";
import SuccinctFullCompare from "../components/SuccinctFullCompare";

const AboutPage = () => {
  return (
    <div
      className="min-h-screen text-gray-800 px-6 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Boundles-Caustics-Tan-03.png')",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <HeroSection />
        <FeatureGrid />
        <ResearchSummary />
        <SuccinctFullCompare />
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-semibold transition"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
