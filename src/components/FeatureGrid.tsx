import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const FeatureGrid = () => {
  const { lang } = useContext(LanguageContext);

  const features =
    lang === "en"
      ? [
          {
            title: "ZK-Powered Execution",
            desc: "Prove offchain computation and verify onchain. Supports Merkle inclusion and Groth16 proofs.",
          },
          {
            title: "Decoupled Architecture",
            desc: "Execution is separated from consensus. Compute happens offchain, while verification remains trustless onchain.",
          },
          {
            title: "Open Proving Market",
            desc: "Requestors submit jobs, provers compete to fulfill them with economic incentives and slashing conditions.",
          },
          {
            title: "Steel Coprocessor",
            desc: "Scale Solidity apps by offloading heavy view functions. Integrates EVM execution into zkVM.",
          },
          {
            title: "OP Kailua",
            desc: "Hybrid Optimistic + ZK rollup engine for fast finality and dispute resolution. Built for OP Stack rollups.",
          },
          {
            title: "Boundless CLI & SDK",
            desc: "Developer tooling for submitting, fulfilling, and verifying proof jobs. Supports Rust, CLI, IPFS, and more.",
          },
        ]
      : [
          {
            title: "ZK 기반 실행",
            desc: "오프체인 계산을 증명하고 온체인에서 검증합니다. Merkle 포함 증명 및 Groth16 지원.",
          },
          {
            title: "실행과 합의의 분리",
            desc: "실행은 오프체인, 검증은 온체인. 성능은 높이고 탈중앙성은 유지.",
          },
          {
            title: "오픈 프로빙 마켓",
            desc: "요청자는 작업을 제출하고, Prover는 보상 기반으로 입찰하여 처리.",
          },
          {
            title: "Steel 코프로세서",
            desc: "Solidity 앱의 연산을 오프로드. EVM 실행을 zkVM과 통합.",
          },
          {
            title: "OP Kailua",
            desc: "Optimistic과 ZK 롤업의 결합. OP Stack 기반 롤업에 최적화.",
          },
          {
            title: "Boundless CLI & SDK",
            desc: "Rust, CLI, IPFS 등 개발자 도구로 증명 작업 생성 및 검증 가능.",
          },
        ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mt-16">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white/90 p-6 rounded-2xl shadow-md border border-gray-300 text-gray-800"
        >
          <h3 className="text-xl font-bold mb-2">{f.title}</h3>
          <p className="text-base leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
