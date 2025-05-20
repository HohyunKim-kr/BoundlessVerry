import { useContext, useEffect, useState, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import gsap from "gsap";

const KidUnderStandPage = () => {
  const { lang } = useContext(LanguageContext);
  const [story, setStory] = useState<{ title: string; sections: any[] } | null>(
    null
  );
  const juiceBoxRef = useRef<HTMLDivElement>(null);
  const juiceDripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStory = async () => {
      const fileName =
        lang === "en"
          ? "/data/boundless_kids_story_en.json"
          : "/data/boundless_kids_story.json";
      const res = await fetch(fileName);
      const data = await res.json();
      setStory(data);
    };

    fetchStory();
  }, [lang]);

  useEffect(() => {
    if (juiceBoxRef.current && juiceDripRef.current) {
      gsap.fromTo(
        juiceBoxRef.current,
        { x: -200, rotate: 0, opacity: 0 },
        { x: 0, rotate: 90, opacity: 1, duration: 2, ease: "power2.inOut" }
      );

      gsap.fromTo(
        juiceDripRef.current,
        { height: 0, opacity: 0 },
        {
          height: 160,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          delay: 2.1,
        }
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-20 font-sans text-[#2d1e1e]"
      style={{ backgroundImage: "url('/Boundles-Caustics-Tan-03.png')" }}
    >
      <div className="max-w-3xl mx-auto relative">
        {/* Juice SVG 애니메이션 */}
        <div
          ref={juiceBoxRef}
          className="absolute left-[-200px] top-[-80px] z-0"
        >
          <a
            href="/Juice Box_Berry.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Juice Box_Berry.svg"
              alt="Juice Box"
              className="w-[360px] h-auto"
            />
          </a>
          <div
            ref={juiceDripRef}
            className="absolute left-[120px] top-[160px] w-2 bg-pink-300 rounded-full"
            style={{ height: 0 }}
          ></div>
        </div>

        <div className="relative z-10 bg-white/90 shadow-xl rounded-xl p-8 overflow-y-auto text-base space-y-6 leading-relaxed mt-12">
          <h2 className="text-3xl font-bold text-rose-500 mb-6">
            {lang === "en"
              ? "🍓 The Story of BoundlessVerry"
              : "🍓 딸기 농장의 비밀 — BoundlessVerry 이야기"}
          </h2>

          {story ? (
            <>
              <p className="text-xl text-gray-700 font-semibold mb-4">
                {story.title}
              </p>
              {story.sections.map((section, idx) => (
                <div key={idx} className="mb-6">
                  <p className="text-2xl font-bold text-[#b82c4c] mt-6">
                    {section.heading}
                  </p>
                  {typeof section.content === "string" ? (
                    <p className="mt-3 text-lg whitespace-pre-line">
                      {section.content}
                    </p>
                  ) : (
                    <ul className="mt-3 list-disc list-inside text-lg">
                      {Object.entries(
                        section.content as Record<string, string>
                      ).map(([term, desc], i) => (
                        <li key={i}>
                          <strong>{term}:</strong> {desc}
                        </li>
                      ))}
                    </ul>
                  )}
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

export default KidUnderStandPage;
