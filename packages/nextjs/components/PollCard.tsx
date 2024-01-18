import TinderCard from "react-tinder-card";

interface Poll {
  pollId: number;
  question: string;
  optionA: string;
  optionB: string;
}

interface PollCardProps {
  poll: Poll;
  onSwipe: (pollId: number, direction: string) => void;
}

interface PollSwiperProps {
  polls: Poll[];
}

const PollCard: React.FC<PollCardProps> = ({ poll, onSwipe }) => {
  return (
    <TinderCard onSwipe={(dir: string) => onSwipe(poll.pollId, dir)}>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto mb-4">
        <h3 className="text-xl font-bold mb-4">{poll.question}</h3>
        <button
          onClick={() => onSwipe(poll.pollId, "left")}
          className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 transition-colors"
        >
          {poll.optionA}
        </button>
        <button
          onClick={() => onSwipe(poll.pollId, "right")}
          className="block w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {poll.optionB}
        </button>
      </div>
    </TinderCard>
  );
};

export const PollSwiper: React.FC<PollSwiperProps> = ({ polls }) => {
  const handleSwipe = (pollId: number, direction: string) => {
    console.log(`Poll ${pollId} swiped ${direction}`);
    // Map direction to vote and call smart contract
  };

  console.log("here wahts", polls);
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {polls.map((poll, index) => (
        <div key={poll.pollId} className={`absolute transition-transform ${index === 0 ? "scale-100" : "scale-90"}`}>
          <PollCard poll={poll} onSwipe={handleSwipe} />
        </div>
      ))}
    </div>
  );
};
