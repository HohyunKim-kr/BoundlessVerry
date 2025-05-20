import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import KidUnderStandPage from "./pages/KidUnderStandPage";
import HeroSection from "./components/HeroSection";
import { LanguageProvider } from "./contexts/LanguageContext";
import DocsSection from "./components/DocsSection";
import Footer from "./pages/Footer";

function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/Boundles-Caustics-Tan-03.png')" }}
      >
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <DocsSection />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/forKids" element={<KidUnderStandPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
