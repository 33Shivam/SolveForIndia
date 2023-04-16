import React from "react";
import { ethers } from "ethers"; //always import ethers.js 5.x.x versions never 6.x.x

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      walletAddress: ""
    };

    this.requestAccount = this.requestAccount.bind(this);
    this.connectWallet = this.connectWallet.bind(this);
  }

  async requestAccount() {
    console.log("Connecting to MetaMask...");

    if (window.ethereum) {
      console.log("MetaMask is installed!");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        
        this.setState({ walletAddress: accounts[0] });
        console.log(accounts);
      } catch (err) {
        console.log("Error Detected");
      }
    } else {
      console.log("MetaMask is not installed!");
    }
  }

  async connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await this.requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container flex">
          <a href="index.html" className="site-brand">
            Train<span>Block</span>
          </a>

          <button type="button" id="navbar-show-btn" className="flex">
            <i className="fas fa-bars"></i>
          </button>

          <div id="navbar-collapse">
            <button type="button" id="navbar-close-btn" className="flex">
              <i className="fas fa-times"></i>
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="gallery.html" className="nav-link">
                  Blog
                </a>
              </li>

              <li className="nav-item">
                <a href="blog.html" className="nav-link">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <button className="btn btn-primary" onClick={this.connectWallet}>
                  <a href="contact.html" className="nav-link">
                    Connect Wallet
                    <br />
                    <h6>({this.state.walletAddress})</h6>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

