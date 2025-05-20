import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const SuccinctFullCompare = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="mt-20 text-gray-300 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        {lang === "en"
          ? "🔬 Boundless vs. Succinct: Full Comparison"
          : "🔬 Boundless vs. Succinct: 완전 비교"}
      </h2>

      <div className="overflow-x-auto text-sm bg-gray-900 rounded-xl border border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-800 text-indigo-400">
            <tr>
              <th className="px-4 py-3">
                {lang === "en" ? "Category" : "항목"}
              </th>
              <th className="px-4 py-3">Boundless</th>
              <th className="px-4 py-3">Succinct</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            <tr>
              <td className="px-4 py-3 font-medium">
                {lang === "en" ? "Core Philosophy" : "기본 철학"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Decentralized ZK compute marketplace"
                  : "ZK 계산의 탈중앙화 마켓"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Universal zkVM + cross-chain proofing"
                  : "범용 zkVM + 체인 간 증명"}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">zkVM</td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "RISC Zero + Merkle aggregation"
                  : "RISC Zero, Merkle 기반 Aggregation"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "SP1 + zk-SNARK proving"
                  : "SP1, 빠른 zk-SNARK proving"}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">
                {lang === "en" ? "Prover Model" : "Prover 모델"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Open market, anyone can bid"
                  : "누구나 입찰, 시장 기반"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Fixed pool, future network planned"
                  : "현재 고정 풀, 향후 네트워크화"}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">
                {lang === "en" ? "Cross-chain Support" : "크로스체인 활용"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Integrates via OP Kailua rollups"
                  : "Kailua 통해 L2/OP 연동"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "zkBridge, light clients, modular stack"
                  : "zkBridge 및 Light Client 구조"}
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">Aggregation</td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Merkle + Groth16 root proof"
                  : "Merkle Tree + Groth16 루트 증명"}
              </td>
              <td className="px-4 py-3">
                {lang === "en"
                  ? "Per proof, aggregation planned"
                  : "개별 proof, aggregation 예정"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-semibold text-gray-800">
        {lang === "en"
          ? "Boundless and Succinct represent two major directions in ZK technology: decentralization of computation vs. cross-chain verifiability. Below is a detailed comparison of their technical and economic design."
          : "ZK 기술의 두 축인 Boundless와 Succinct는 철학, 실행 방식, 시장 구조에서 서로 다른 방향을 지향합니다. 아래는 그 세부적인 차이를 기술적, 경제적 관점에서 정리한 비교입니다."}
      </p>
    </div>
  );
};

export default SuccinctFullCompare;
