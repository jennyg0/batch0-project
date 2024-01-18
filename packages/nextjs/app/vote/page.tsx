"use client";

import { PollSwiper } from "~~/components/PollCard";

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
  // ... more mock polls
];

const PollSwiperPage = () => {
  return (
    <>
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">Poll Swiper</h1>
        <p className="text-neutral">
          Swipe through the polls and cast your votes. Interact with the blockchain in a fun and engaging way.
        </p>
      </div>
      <PollSwiper polls={mockPolls} />
    </>
  );
};

export default PollSwiperPage;
