import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const DocsSection = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <section className="bg-white/60 backdrop-blur-md text-gray-900 py-20 px-6 text-center rounded-xl max-w-5xl mx-auto my-12 shadow-xl">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6 tracking-tight">
        {lang === "en"
          ? "📚 Boundless Documentation"
          : "📚 바운드리스 문서 모음"}
      </h2>
      <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
        {lang === "en"
          ? "Learn how Boundless works, read the whitepaper, and explore the tech behind the protocol."
          : "Boundless의 작동 원리와 기술 배경, 백서 내용을 확인해보세요."}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6 text-base font-medium">
        <a
          href="https://docs.beboundless.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          📘 {lang === "en" ? "Developer Docs" : "개발자 문서"}
        </a>
        <a
          href="https://x.com/boundless_xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          🐦 {lang === "en" ? "Twitter (X)" : "트위터 (X)"}
        </a>
        <a
          href="https://read.beboundless.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          🧠 {lang === "en" ? "Whitepaper" : "백서"}
        </a>
      </div>
    </section>
  );
};

export default DocsSection;
