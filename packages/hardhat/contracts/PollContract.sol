//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract PollContract {
	error PollDoesNotExist();

	struct Poll {
		uint256 pollId;
		string question;
		string optionA;
		string optionB;
		address creator;
		uint256 votesA;
		uint256 votesB;
		// uint256 startTime;
		// uint256 duration;
	}

	uint256 private pollId;
	mapping(uint256 => Poll) private polls;
	mapping(uint256 => mapping(address => bool)) private hasVoted;

	constructor() {
		pollId = 1;
	}

	function createPoll(
		string calldata _question,
		string calldata _optionA,
		string calldata _optionB
	) public {
		Poll memory newPoll = Poll(
			pollId,
			_question,
			_optionA,
			_optionB,
			msg.sender,
			0,
			0
		);
		polls[pollId] = newPoll;
		pollId++;
	}

	function vote(uint256 _pollId, bool _voteOnA) public {
		if (_pollId > pollId) revert PollDoesNotExist();

		Poll storage poll = polls[_pollId];
		if (_voteOnA) {
			poll.votesA++;
		} else {
			poll.votesB++;
		}
	}

	function viewResults(
		uint256 _pollId
	) public view returns (uint256, uint256) {
		if (_pollId > pollId) revert PollDoesNotExist();
		Poll storage poll = polls[_pollId];
		return (poll.votesA, poll.votesB);
	}
}
