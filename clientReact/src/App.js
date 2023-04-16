import Home from './pages/Home'

import Header from './components/Header';
import './App.css';
import './utility.css';
import './normalize.css';
import './responsive.css';
import './fonts.css';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Web3 from 'web3';



import { ethers } from "ethers";

// Import Mint contract ABI
import mintAbi from "./mint.json";


  


function App() {
// Connect to Ethereum network
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Set contract address
const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

// Create instance of Mint contract
const mintContract = new ethers.Contract(contractAddress, mintAbi, provider.getSigner());

// Function to mint new NFT
async function mintNFT(event) {
  event.preventDefault();
  // Get input values from HTML form
  const name = document.getElementById("name").value;
  const wallet = "0x976EA74026E726554dB657fA54763abd0C3a0aa9";
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;

  // Call mintTicket function on Mint contract
  const mintTx = await mintContract.mintTicket(name, wallet, source, destination);
  await mintTx.wait();

  // Log number of tokens after minting
  const tokenCount = await mintContract.tokenCount();
  console.log(`Number of tokens: ${tokenCount}`);
}

// Attach event listener to "mint" button
function addEventListeners() {
  const mintButton = document.getElementById("mint-button");
  mintButton.addEventListener("click", mintNFT);
}

window.addEventListener("load", addEventListeners);

  

  

  

  return <div>
    <Router>
    <Header/>
    {/* <Routes>
      <Route exact path="/" element={<Home/>}/>     
     </Routes>      */}
     <Home/>
      {/* <About/> */}
      {/* <Contact/> */}
      {/* <Blog/> */}
      {/* <Gallery/> */}
    <Footer/>

    </Router>
  </div>;
 
}

export default App;