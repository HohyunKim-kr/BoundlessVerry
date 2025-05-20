import { createContext, useState } from "react";

export const LanguageContext = createContext({
  lang: "ko",
  toggleLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  const toggleLang = () => setLang((prev) => (prev === "ko" ? "en" : "ko"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
