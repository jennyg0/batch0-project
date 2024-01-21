"use client";

import type { NextPage } from "next";
import { useFetchPolls } from "~~/hooks/useFetchPolls";

const Results: NextPage = () => {
  const polls = useFetchPolls();

  function calculatePercentage(votesA: number, votesB: number) {
    const totalVotes = votesA + votesB;
    if (totalVotes === 0) {
      return 0;
    }
    return (votesA / totalVotes) * 100;
  }

  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Results</h1>
        <p className="text-neutral">Check out the results from the polls</p>
      </div>
      <div className="results-container my-4">
        {polls &&
          polls.map(poll => (
            <div className="poll-result-card bg-white p-4 rounded-lg shadow-md my-2 w-1/2 mx-auto" key={poll.pollId}>
              <h3 className="text-lg font-semibold">{poll.question}</h3>

              <div className="flex justify-between mb-2">
                <p>{poll.optionA}</p>
                <p>{poll.optionB}</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div className="flex h-full rounded-full">
                  <div
                    className="bg-blue-600"
                    style={{ width: `${calculatePercentage(poll.votesA, poll.votesB)}%` }}
                  ></div>
                  <div
                    className="bg-red-600"
                    style={{ width: `${calculatePercentage(poll.votesB, poll.votesA)}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between mt-2">
                <p>{poll.votesA} votes</p>
                <p>{poll.votesB} votes</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Results;
