import { useEffect, useState } from "react";
import { useScaffoldContract, useScaffoldContractRead } from "./scaffold-eth";
import { Poll, PollView } from "~~/types/polls";

export const useFetchPolls = () => {
  const [polls, setPolls] = useState<Poll[]>([]);

  const { data: contract } = useScaffoldContract({
    contractName: "PollContract",
  });

  const { data: pollCount } = useScaffoldContractRead({
    contractName: "PollContract",
    functionName: "getPollCount",
  });

  useEffect(() => {
    const fetchPolls = async () => {
      const newPolls: Poll[] = [];
      if (!pollCount || !contract) return;

      for (let i = 1; i <= pollCount; i++) {
        const pollData = (await contract.read.viewPoll([BigInt(i)])) as PollView;

        const poll: Poll = {
          pollId: Number(pollData.pollId),
          question: pollData.question,
          optionA: pollData.optionA,
          optionB: pollData.optionB,
          creator: pollData.creator,
          votesA: Number(pollData.votesA),
          votesB: Number(pollData.votesB),
          endTime: Number(pollData.endTime),
          hasVoted: pollData.hasVoted,
        };
        newPolls.push(poll);
      }
      setPolls(newPolls);
    };

    fetchPolls();
  }, [pollCount]);

  return polls;
};
