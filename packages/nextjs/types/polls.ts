export interface Poll {
  pollId: number;
  question: string;
  optionA: string;
  optionB: string;
  creator: string;
  votesA: number;
  votesB: number;
  hasVoted: boolean;
}

export interface PollCardProps {
  poll: Poll;
  onVote: (pollId: number, option: string) => void;
}

export interface PollSwiperProps {
  polls: Poll[];
}

export enum PollVote {
  OptionA = "true",
  OptionB = "false",
  Skip = "skip",
}
