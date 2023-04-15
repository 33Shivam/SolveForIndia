// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Mint is ERC721 {
    struct Ticket {
        string name;
        address wallet;
        string source;
        string destination;
    }

    uint256 public ticketCount;
    mapping(uint256 => Ticket) public tickets;

    constructor() ERC721("TicketNFT", "TKT") {}

    function mintTicket(string memory _name, address _wallet, string memory _source, string memory _destination) public {
        Ticket memory newTicket = Ticket({
            name: _name,
            wallet: _wallet,
            source: _source,
            destination: _destination
        });

        uint256 newTicketId = ticketCount;
        tickets[newTicketId] = newTicket;

        _safeMint(_wallet, newTicketId);
        ticketCount++;
    }
}
