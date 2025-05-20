import { useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./HeroSection.css";

const HeroSection = () => {
  const [isPopped, setIsPopped] = useState(false);
  const { lang } = useContext(LanguageContext);

  const handleClick = () => {
    if (isPopped) return;
    setIsPopped(true);
    setTimeout(() => setIsPopped(false), 1000);
  };

  return (
    <section className="text-center py-24 px-4 font-[Inter,sans-serif]">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm tracking-tight leading-tight">
        {lang === "en"
          ? "🌐 Boundless: Universal ZK for Every Chain"
          : "🌐 Boundless: 모든 체인을 위한 ZK 컴퓨팅"}
      </h1>
      <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
        {lang === "en"
          ? "Explore verifiable computation at scale — offload execution, prove with ZK, and verify onchain. Scalable magic for every chain."
          : "검증 가능한 컴퓨팅을 확장하세요 — 계산은 오프체인에서, 검증은 온체인에서. 모든 체인을 위한 확장 가능한 ZK 마법."}
      </p>

      <div className="flex justify-center">
        <div
          className="w-80 h-80 md:w-96 md:h-96 relative cursor-pointer transition-all hover:scale-105"
          onClick={handleClick}
        >
          <img
            src={isPopped ? "/BerryExplosion.png" : "/Render%20Berry.png"}
            alt="Spinning Berry"
            className={`w-full h-full object-contain drop-shadow-xl transition-transform duration-500 ease-out ${
              isPopped ? "berry-pop" : "animate-spin-3d"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
