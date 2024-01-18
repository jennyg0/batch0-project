import React, { useState } from "react";
import PollCard from "./PollCard";

interface Poll {
  pollId: number;
  question: string;
  optionA: string;
  optionB: string;
}

interface PollSwiperProps {
  polls: Poll[];
}

const PollSwiper = ({ polls }: PollSwiperProps) => {
  // const [activePollIndex, setActivePollIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVote = (pollId: number, option: string) => {
    console.log(`Voted ${option} on poll ${pollId}`);

    // setTimeout(() => {
    //   setActivePollIndex(current => current + 1);
    // }, 600);
    setCurrentIndex(current => current + 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {polls.map((poll, index) => (
        <div
          key={poll.pollId}
          className={`absolute transition-all duration-300 ease-in-out transform ${
            index === currentIndex ? "scale-100" : "scale-95"
          }`}
        >
          {index === currentIndex && <PollCard poll={poll} onVote={handleVote} />}
        </div>
      ))}
      {currentIndex >= polls.length && (
        <div className="text-center p-4 bg-white rounded-lg">
          <h3 className="text-2xl font-bold">That&apos;s all the polls for now!</h3>
          <p>Thank you for participating.</p>
        </div>
      )}
    </div>
  );
};

export default PollSwiper;
