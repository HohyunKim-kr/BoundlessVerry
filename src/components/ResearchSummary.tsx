import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const ResearchSummary = () => {
  const { lang } = useContext(LanguageContext);

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="mt-20 text-gray-900 space-y-12 bg-white/80 backdrop-blur-md rounded-xl px-8 py-12 shadow-lg max-w-5xl mx-auto">
      {children}
    </div>
  );

  if (lang === "en") {
    return (
      <Wrapper>
        <h2 className="text-4xl font-bold text-center text-indigo-700">
          📖 Boundless Research Summary
        </h2>

        <section className="space-y-8 text-base leading-relaxed">
          <p>
            Blockchains are inherently slow and expensive. Every node must
            re-execute every transaction. Boundless flips this paradigm by
            executing complex computations off-chain and verifying them on-chain
            with ZK proofs.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-500">
            🔁 How It Works (Proof Lifecycle)
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Write and execute zkVM program in Rust to produce a journal and ZK
              seal
            </li>
            <li>
              Submit proof request to Boundless Market (with input, reward, and
              constraints)
            </li>
            <li>Provers bid via reverse Dutch auction</li>
            <li>Winning Prover generates and submits proof</li>
            <li>
              Smart contract verifies the Merkle inclusion proof and pays reward
            </li>
          </ol>

          <h3 className="text-2xl font-semibold text-indigo-500">
            🔍 Key Concepts
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Requestor:</strong> Developer or user requesting ZK proof
            </li>
            <li>
              <strong>Prover:</strong> Generates proofs and earns rewards
            </li>
            <li>
              <strong>Boundless Market:</strong> Decentralized proof job
              marketplace
            </li>
            <li>
              <strong>Proof (Seal):</strong> ZK proof using Merkle tree or
              Groth16
            </li>
            <li>
              <strong>Aggregation:</strong> Merges multiple proofs into one root
              for efficiency
            </li>
          </ul>

          <p>
            Anyone can be a requestor or a Prover. Provers earn by computing
            proofs with GPUs, but lose their stake if they fail. This creates a
            decentralized, economically efficient computing market.
          </p>

          <h3 className="text-2xl font-semibold text-indigo-500">
            🧰 Extensions: Steel & OP Kailua
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Steel:</strong> ZK coprocessor for EVM apps to offload
              view execution
            </li>
            <li>
              <strong>OP Kailua:</strong> Hybrid Optimistic + ZK Rollup
              architecture
            </li>
          </ul>

          <h3 className="text-2xl font-semibold text-indigo-500">
            🧪 Solidity Example
          </h3>
          <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
            <code>{`function set(uint256 x, bytes calldata seal) public {
  bytes memory journal = abi.encode(x);
  verifier.verify(seal, imageId, sha256(journal));
  number = x;
}`}</code>
          </pre>

          <p className="text-center text-base text-gray-600">
            Boundless redefines computation: fast, cheap, and universally
            verifiable.
          </p>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className="text-4xl font-bold text-center text-indigo-700">
        📖 Boundless 리서치 요약
      </h2>

      <section className="space-y-8 text-base leading-relaxed">
        <p>
          블록체인은 본질적으로 느리고, 계산 비용이 높습니다. 모든 노드가 모든
          트랜잭션을 재실행해야 하기 때문입니다. Boundless는 이 구조를
          뒤집습니다. 복잡한 계산은 오프체인에서 실행하고, 그 결과만 ZK 증명으로
          온체인에서 검증합니다.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-500">
          🔁 작동 방식 (Proof Lifecycle)
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>Rust로 zkVM 프로그램 작성 및 실행 → journal과 ZK seal 생성</li>
          <li>
            Boundless Market에 증명 요청 제출 (입력값, 보상, 제한 조건 포함)
          </li>
          <li>Prover가 역경매로 입찰</li>
          <li>선정된 Prover가 증명 생성 및 제출</li>
          <li>스마트 컨트랙트가 Merkle 포함 증명을 검증하고 보상 지급</li>
        </ol>

        <h3 className="text-2xl font-semibold text-indigo-500">🔍 주요 개념</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Requestor:</strong> ZK 증명을 요청하는 개발자 또는 사용자
          </li>
          <li>
            <strong>Prover:</strong> 증명을 생성하고 보상 받는 참여자
          </li>
          <li>
            <strong>Boundless Market:</strong> 탈중앙 증명 마켓
          </li>
          <li>
            <strong>Proof (Seal):</strong> Merkle 기반 또는 Groth16 기반 증명
            데이터
          </li>
          <li>
            <strong>Aggregation:</strong> 여러 증명을 하나로 병합하여 비용
            최적화
          </li>
        </ul>

        <p>
          누구나 요청자, 누구나 Prover가 될 수 있습니다. Prover는 GPU 연산을
          통해 보상을 얻고, 실패 시 스테이킹이 소각되어 자율적 신뢰가
          형성됩니다.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-500">
          🧰 확장: Steel & OP Kailua
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Steel:</strong> EVM 앱의 view 연산을 오프체인에서 실행하고,
            결과만 ZK로 검증
          </li>
          <li>
            <strong>OP Kailua:</strong> Optimism에 ZK fault-proof를 결합한
            하이브리드 롤업 구조
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-500">
          🧪 Solidity 예시
        </h3>
        <pre className="bg-gray-900 text-white text-sm p-4 rounded-lg overflow-x-auto">
          <code>{`function set(uint256 x, bytes calldata seal) public {
  bytes memory journal = abi.encode(x);
  verifier.verify(seal, imageId, sha256(journal));
  number = x;
}`}</code>
        </pre>

        <p className="text-center text-base text-gray-600">
          Boundless는 빠르고 저렴하며 누구나 검증 가능한 새로운 컴퓨팅 구조를
          만듭니다.
        </p>
      </section>
    </Wrapper>
  );
};

export default ResearchSummary;
