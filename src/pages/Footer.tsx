import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <footer className="bg-[#1a1a1a] text-white text-base text-center py-20 px-8 border-t border-gray-700">
      <div className="flex justify-center gap-10 mb-6 text-lg font-semibold">
        <a
          href="https://x.com/MoneyMonkeycC8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          🐦 {lang === "en" ? "Twitter" : "트위터"}
        </a>
        <a
          href="https://github.com/HohyunKim-kr/BoundlessVerry"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          🧠 {lang === "en" ? "GitHub" : "깃허브"}
        </a>
      </div>
      <p className="text-sm text-gray-300 mt-2">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold text-white">BoundlessVerry</span>.{" "}
        {lang === "en"
          ? "All rights reserved. Powered by Quaternion."
          : "모든 권리 보유. Quaternion이 제작하였습니다."}
      </p>
    </footer>
  );
};

export default Footer;
