"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "PollContract",
    functionName: "createPoll",
    args: [question, optionA, optionB],
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
      setQuestion("");
      setOptionA("");
      setOptionB("");
    },
  });

  async function createPoll() {
    if (!isLoading && !isMining) {
      try {
        await writeAsync();
      } catch (error) {
        console.error("Transaction failed", error);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Create a Poll</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Question</label>
            <input
              type="text"
              placeholder="Enter your question"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Option A</label>
            <input
              type="text"
              placeholder="First Option"
              value={optionA}
              onChange={e => setOptionA(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Option B</label>
            <input
              type="text"
              placeholder="Second Option"
              value={optionB}
              onChange={e => setOptionB(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button
            type="button"
            onClick={() => createPoll()}
            disabled={!question || !optionA || !optionB}
            className={`w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none ${
              !question || !optionA || !optionB
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-700"
            }`}
          >
            Create Poll
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
