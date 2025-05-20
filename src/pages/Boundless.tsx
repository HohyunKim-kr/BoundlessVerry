import React from "react";

const Boundless = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 min-h-screen text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Boundless Protocol
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          The first universal protocol bringing Zero Knowledge to every chain.
          Offload execution, scale computation, and verify anywhere — all with
          cryptographic proof.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Feature
            title="ZK-Powered Execution"
            desc="Prove offchain computations and verify on any chain with Merkle-inclusion or Groth16 proofs."
          />
          <Feature
            title="Decoupled Architecture"
            desc="Execution is separate from consensus. Scale apps with abundant compute while retaining onchain security."
          />
          <Feature
            title="Open Proving Market"
            desc="Request proofs, provers bid and fulfill. Built-in incentives ensure fairness, scalability, and decentralization."
          />
        </div>

        <a
          href="https://docs.beboundless.xyz"
          className="inline-block mt-12 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold transition"
        >
          📚 Read the Docs
        </a>
      </div>
    </div>
  );
};

const Feature = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Boundless;
