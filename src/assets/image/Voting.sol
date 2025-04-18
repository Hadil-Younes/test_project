// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;
    mapping(address => bool) public hasVoted;
    uint256 public candidateCount;

    address public admin;
 
    constructor() {
        admin = msg.sender; // Set the deployer as admin
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action.");
        _;
    }

    function addCandidate(string memory _name) public onlyAdmin {
        candidates[candidateCount] = Candidate(_name, 0);
        candidateCount++;
    }

    function vote(uint256 _candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateId < candidateCount, "Invalid candidate.");

        hasVoted[msg.sender] = true;
        candidates[_candidateId].voteCount++;
    }

    function getCandidate(uint256 _candidateId)
        public
        view
        returns (string memory, uint256)
    {
        Candidate memory candidate = candidates[_candidateId];
        return (candidate.name, candidate.voteCount);
    }

    // Receive Ether
    event Received(address sender, uint256 amount);

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}