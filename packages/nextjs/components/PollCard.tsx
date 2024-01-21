import { PollCardProps, PollVote } from "~~/types/polls";

const PollCard = ({ poll, onVote }: PollCardProps) => {
  const handleVote = (option: string) => {
    setTimeout(() => onVote(poll.pollId, option), 300);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 min-h-40 flex flex-col justify-between">
      <div className="flex justify-center space-x-4 mb-2">
        <h3 className="text-xl font-bold mb-4">{poll.question}</h3>
      </div>
      <div className="mt-4">
        <div className="flex justify-center space-x-4 mb-4">
          <button
            onClick={() => handleVote(PollVote.OptionA)}
            className="bg-[#595967] hover:bg-[#6e7080] text-white font-bold py-2 px-4 rounded"
          >
            {poll.optionA}
          </button>
          <button
            onClick={() => handleVote(PollVote.OptionB)}
            className="bg-[#8ABAD3] hover:bg-[#7aa3bf] text-white font-bold py-2 px-4 rounded"
          >
            {poll.optionB}
          </button>
        </div>
        <button
          onClick={() => handleVote(PollVote.Skip)}
          className="text-gray-500 hover:text-gray-700 py-2 mx-auto block"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default PollCard;
