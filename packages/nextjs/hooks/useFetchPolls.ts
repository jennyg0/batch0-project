import { useEffect, useState } from "react";
import { useScaffoldContract, useScaffoldContractRead } from "./scaffold-eth";

interface Poll {
  pollId: number;
  question: string;
  optionA: string;
  optionB: string;
  creator: string;
  votesA: number;
  votesB: number;
}

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
        const pollData = await contract.read.viewPoll([BigInt(i)]);
        const poll: Poll = {
          pollId: Number(pollData[0]),
          question: pollData[1],
          optionA: pollData[2],
          optionB: pollData[3],
          creator: pollData[4],
          votesA: Number(pollData[5]),
          votesB: Number(pollData[6]),
        };
        newPolls.push(poll);
      }

      setPolls(newPolls);
    };

    fetchPolls();
  }, [pollCount]);

  return polls;
};
