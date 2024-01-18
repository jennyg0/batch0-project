interface Poll {
  pollId: number;
  question: string;
  optionA: string;
  optionB: string;
}

interface PollCardProps {
  poll: Poll;
  onVote: (pollId: number, option: string) => void;
}

const PollCard = ({ poll, onVote }: PollCardProps) => {
  // const [voted, setVoted] = useState(false);
  // const [slideDirection, setSlideDirection] = useState("");

  const handleVote = (option: string) => {
    // setSlideDirection(option === poll.optionA ? "left" : "right");
    setTimeout(() => onVote(poll.pollId, option), 300);
  };

  return (
    // <div
    //   className={`transition-transform duration-300 ease-in-out transform ${
    //     slideDirection === "left" ? "-translate-x-full" : "translate-x-full"
    //   }`}
    // >
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{poll.question}</h3>
      <div className="flex justify-between">
        <button
          onClick={() => handleVote(poll.optionA)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {poll.optionA}
        </button>
        <button
          onClick={() => handleVote(poll.optionB)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {poll.optionB}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default PollCard;
