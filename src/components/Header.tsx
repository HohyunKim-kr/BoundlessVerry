import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import BoundlessVerryLogo from "/BoundlessVerry.png"; // 경로는 실제 위치에 맞게 조정

const Header = () => {
  const location = useLocation();
  const { lang, toggleLang } = useContext(LanguageContext);

  const linkStyle = (path: string) =>
    location.pathname === path
      ? "text-indigo-500 font-bold underline"
      : "text-gray-900 hover:text-indigo-400 font-medium";

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-300 py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src={BoundlessVerryLogo}
          alt="BoundlessVerry Logo"
          className="h-10 w-auto"
        />
      </Link>
      <nav className="space-x-8 text-lg">
        <Link to="/about" className={linkStyle("/about")}>
          {lang === "en" ? "About" : "소개"}
        </Link>
        <Link to="/forKids" className={linkStyle("/forKids")}>
          {lang === "en" ? "For Kids" : "아이들을 위해"}
        </Link>
        <Link to="/research" className={linkStyle("/research")}>
          {lang === "en" ? "Research" : "리서치"}
        </Link>
        <button
          onClick={toggleLang}
          className="ml-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white text-sm font-semibold transition"
        >
          {lang === "en" ? "한국어" : "English"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
