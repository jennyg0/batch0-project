import { useState } from "react";
import PollCard from "./PollCard";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";
import { PollSwiperProps, PollVote } from "~~/types/polls";

const PollSwiper = ({ polls }: PollSwiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { writeAsync, isLoading, isMining } = useScaffoldContractWrite({
    contractName: "PollContract",
    functionName: "vote",
    args: [0n, true], // placeholder args to initialize hook
  });

  const onVote = async (pollId: number, option: string) => {
    console.log(`Voted ${option} on poll ${pollId}`);

    let voteArg;
    if (option === PollVote.OptionA) {
      voteArg = true;
    } else if (option === PollVote.OptionB) {
      voteArg = false;
    } else if (option === PollVote.Skip) {
      setCurrentIndex(current => current + 1);
      return;
    }

    if (!isLoading && !isMining && voteArg !== undefined) {
      try {
        await writeAsync({ args: [BigInt(pollId), voteArg] });

        setCurrentIndex(current => current + 1);
      } catch (error) {
        console.error("Error while voting:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {polls.map((poll, index) => (
        <div
          key={poll.pollId}
          className={`absolute transition-all duration-300 ease-in-out transform ${
            index === currentIndex ? "scale-100" : "scale-95"
          }`}
        >
          {index === currentIndex && !poll.hasVoted && <PollCard poll={poll} onVote={onVote} />}
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
