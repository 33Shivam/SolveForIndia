# TrainBlock

## Project Brief
Non-fungible tokens (NFTs) have gained popularity in recent years as a secure and verifiable way to represent digital assets. In this project, we explore the use of NFTs in IRCTC Railways to provide secure and verifiable ticketing for passengers. By using NFTs, passengers can purchase and redeem their tickets digitally, eliminating the need for paper tickets and reducing the risk of fraud. We will develop a DAPP that allows passengers to search for train routes, purchase NFT tickets, and store them securely on their mobile device. The application will feature faster online booking, resoldable tickets, and less need for ground surveillance. Additionally, we will associate some travel benefits with NFT tickets, such as priority boarding or access to lounges, and offer discounts for regular travelers on a specific route, incentivizing them to use NFT tickets for their journeys. Users can also take up loans on their NFTs, which they have to clear after the journey ends. This is beneficial in situations where there are network issues with payments. The application will also provide ticket inspectors with a way to verify the authenticity of NFT tickets. Through this project, we aim to provide a more secure, convenient, and rewarding ticketing system for IRCTC Railways passengers.

For Results and More Information on project view (https://github.com/33Shivam/SolveForIndia/blob/0265a1d6d38ae3c3798413c2590daeeb568d1bdf/NEXT%20GENERATION%20TICKET%20SYSTEM.pdf)

## Prerequisites

Before you begin, make sure you have the following software installed:

-   [Node.js](https://nodejs.org/en/)
-   [npm](https://www.npmjs.com/)
-   [Metamask](https://metamask.io/)
-    [Hardhat](https://hardhat.org/)

## Installation

1.  Clone the repository:

bashCopy code

`git clone https://github.com/33Shivam/SolveForIndia` 

2.  Install the dependencies:

bashCopy code

`cd project-name
npm install` 

3.  Install Web3.js:

Copy code

`npm install web3` 

5.  Install OpenZeppelin:

bashCopy code

`npm install @openzeppelin/contracts` 

6.  Install Hardhat:

cssCopy code

`npm install --save-dev hardhat` 

7.  Run a local Hardhat node:

Copy code

`npx hardhat node` 

8.  In a separate terminal window, deploy the contract to the local node:

arduinoCopy code

`npx hardhat run scripts/deploy.js --network localhost` 

## Usage

1.  Start the React app:

sqlCopy code

`npm start` 

2.  Open Metamask and connect to the local Hardhat network by selecting "Custom RPC" and entering `http://localhost:8545` as the URL.
    
3.  In the app, enter the details of the ticket you wish to purchase and click "Buy Ticket".
    
4.  Metamask will prompt you to confirm the transaction. Once you confirm, the ticket will be purchased and added to your account.
    

## Contributing

Contributions are welcome! To contribute to the project, please follow these steps:

1.  Fork the repository.
    
2.  Create a new branch for your feature:
    

cssCopy code

`git checkout -b feature-name` 

3.  Make your changes and commit them:

sqlCopy code

`git commit -m "Description of changes"` 

4.  Push your changes to your forked repository:

perlCopy code

`git push origin feature-name` 

5.  Create a pull request to merge your changes into the main repository.

