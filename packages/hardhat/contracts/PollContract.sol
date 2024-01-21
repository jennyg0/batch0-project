//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract PollContract {
	error PollDoesNotExist();
	error AlreadyVoted();
	error PollExpired();

	struct Poll {
		uint256 pollId;
		string question;
		string optionA;
		string optionB;
		address creator;
		uint256 votesA;
		uint256 votesB;
		uint256 endTime;
		mapping(address => bool) hasVoted;
	}

	struct PollView {
		uint256 pollId;
		string question;
		string optionA;
		string optionB;
		address creator;
		uint256 votesA;
		uint256 votesB;
		uint256 endTime;
		bool hasVoted;
	}

	uint256 private pollId;
	mapping(uint256 => Poll) private polls;

	event PollCreated(address creator, uint256 pollId);
	event Voted(address voter, uint256 pollId);

	constructor() {
		pollId = 1;
	}

	modifier pollNotExpired(uint256 _pollId) {
		if (polls[_pollId].endTime < block.timestamp) revert PollExpired();
		_;
	}

	function createPoll(
		string calldata _question,
		string calldata _optionA,
		string calldata _optionB
	) public {
		Poll storage newPoll = polls[pollId];
		newPoll.pollId = pollId;
		newPoll.question = _question;
		newPoll.optionA = _optionA;
		newPoll.optionB = _optionB;
		newPoll.creator = msg.sender;
		newPoll.endTime = block.timestamp + 24 hours;

		emit PollCreated(msg.sender, pollId);
		pollId++;
	}

	function vote(
		uint256 _pollId,
		bool _voteOnA
	) public pollNotExpired(_pollId) {
		if (_pollId >= pollId) revert PollDoesNotExist();

		Poll storage poll = polls[_pollId];
		if (poll.hasVoted[msg.sender] == true) revert AlreadyVoted();
		if (_voteOnA) {
			poll.votesA++;
		} else {
			poll.votesB++;
		}
		poll.hasVoted[msg.sender] = true;
		emit Voted(msg.sender, _pollId);
	}

	function viewPoll(uint256 _pollId) external view returns (PollView memory) {
		if (_pollId >= pollId) revert PollDoesNotExist();
		Poll storage poll = polls[_pollId];
		return
			PollView(
				poll.pollId,
				poll.question,
				poll.optionA,
				poll.optionB,
				poll.creator,
				poll.votesA,
				poll.votesB,
				poll.endTime,
				poll.hasVoted[msg.sender]
			);
	}

	function getPollCount() external view returns (uint256) {
		return pollId - 1;
	}
}
