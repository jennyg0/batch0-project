/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    PollContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "AlreadyVoted",
          type: "error",
        },
        {
          inputs: [],
          name: "PollDoesNotExist",
          type: "error",
        },
        {
          inputs: [],
          name: "PollExpired",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
          ],
          name: "PollCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "voter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "pollId",
              type: "uint256",
            },
          ],
          name: "Voted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_question",
              type: "string",
            },
            {
              internalType: "string",
              name: "_optionA",
              type: "string",
            },
            {
              internalType: "string",
              name: "_optionB",
              type: "string",
            },
          ],
          name: "createPoll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getPollCount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "viewPoll",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "string",
              name: "",
              type: "string",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
          ],
          name: "viewResults",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_pollId",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "_voteOnA",
              type: "bool",
            },
          ],
          name: "vote",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
