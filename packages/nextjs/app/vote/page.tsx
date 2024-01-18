"use client";

import type { NextPage } from "next";
import PollSwiper from "~~/components/PollSwiper";

const mockPolls = [
  {
    pollId: 1,
    question: "Do you like coding?",
    optionA: "Yes",
    optionB: "No",
  },
  {
    pollId: 2,
    question: "Is coffee beneficial for coding?",
    optionA: "Absolutely",
    optionB: "Not really",
  },
  {
    pollId: 3,
    question: "Is coffee beneficial for coding?",
    optionA: "Absolutely",
    optionB: "Not really?",
  },
  {
    pollId: 4,
    question: "Is coffee beneficial for coding?",
    optionA: "Absolutely!!",
    optionB: "Not really",
  },
  // ... more mock polls
];

const Vote: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Voting</h1>
        <p className="text-neutral">Swipe through the polls and cast your votes.</p>
      </div>
      <PollSwiper polls={mockPolls} />
    </>
  );
};

export default Vote;
