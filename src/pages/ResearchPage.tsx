import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const ResearchPage = () => {
  const { lang } = useContext(LanguageContext);
  const [report, setReport] = useState<{
    title: string;
    sections: any[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const fileName =
        lang === "en"
          ? "/data/boundless_zk_report_en.json"
          : "/data/boundless_zk_report.json";
      const res = await fetch(fileName);
      const data = await res.json();
      setReport(data);
    };

    fetchData();
  }, [lang]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-gray-900 px-6 py-20 min-h-screen"
      style={{ backgroundImage: "url('/Boundles-Caustics-Tan-03.png')" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 rounded-xl p-8 shadow-lg text-base space-y-6 leading-relaxed">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6">
            {lang === "en" ? "📘 Boundless Research" : "📘 바운드리스 리서치"}
          </h2>

          {report ? (
            <>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                {report.title}
              </p>
              {report.sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                  <p className="text-2xl font-bold text-gray-800 mt-6">
                    {section.heading}
                  </p>
                  <p className="mt-3 text-lg text-gray-700 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-lg">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
