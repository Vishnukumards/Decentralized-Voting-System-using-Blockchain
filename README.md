# 🗳️ Decentralized Voting System using Blockchain

A **Final Year Project** implementing a secure, transparent, and tamper-proof voting system using blockchain technology. This system eliminates the need for a central authority, ensuring data integrity, voter anonymity, and auditability.

---

## 📌 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract Overview](#smart-contract-overview)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributors](#contributors)
- [License](#license)

---

## 📖 Introduction

Traditional voting systems are often centralized and vulnerable to manipulation, fraud, and lack of transparency. This project leverages **blockchain technology** to create a **decentralized voting platform**, enabling secure, verifiable elections where every vote is recorded on an immutable ledger.

---

## ✨ Features

- ✅ Secure voter authentication  
- ✅ Blockchain-based vote recording  
- ✅ Real-time vote count with transparency  
- ✅ Smart contract-powered elections  
- ✅ Role-based access (Admin, Voter)  
- ✅ Tamper-proof and auditable results  
- ✅ User-friendly web interface  

---

## 🛠️ Tech Stack

| Layer           | Technology                      |
|----------------|----------------------------------|
| Frontend       | HTML, CSS, JavaScript, React.js |
| Backend        | Node.js, Express.js              |
| Smart Contracts| Solidity                         |
| Blockchain     | Ethereum (Ganache/Testnet)       |
| Wallet         | MetaMask                         |
| Framework      | Truffle / Hardhat                |
| Database       | IPFS / JSON (for minimal data)   |

---

## 🏗️ Architecture

- Frontend connects with Ethereum blockchain via **Web3.js**.  
- Smart Contracts manage election logic, deployed on a local or test Ethereum network.  
- Voters interact with the DApp using **MetaMask** for transaction signing.  
- Each vote is a blockchain transaction recorded permanently.  

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/decentralized-voting.git
cd decentralized-voting

# Install dependencies
npm install

# Compile smart contracts
truffle compile

# Start Ganache and migrate contracts
truffle migrate

# Run the development server
npm start


## 📦 Prerequisites

To successfully run and understand this project, users should have a working knowledge of the following tools and technologies, along with a properly configured development environment:

### 🧠 Technical Knowledge Required

- Basic understanding of **blockchain** and **Ethereum**
- Familiarity with **smart contracts** and **Solidity**
- Web development basics (**HTML**, **CSS**, **JavaScript**)
- Backend development using **Node.js** / **Express.js**
- Basic knowledge of **React.js**
- Usage of **Truffle** or **Hardhat**
- Understanding of **MetaMask**, **Web3.js**, and DApps

### 🧰 Tools to Install

| Tool         | Purpose                                     | Link                                      |
|--------------|---------------------------------------------|-------------------------------------------|
| Node.js      | JavaScript runtime environment              | https://nodejs.org/                       |
| npm          | Node package manager                        | Comes with Node.js                        |
| Truffle      | Smart contract development framework        | https://trufflesuite.com/truffle/         |
| Ganache      | Personal Ethereum blockchain for testing    | https://trufflesuite.com/ganache/         |
| MetaMask     | Ethereum wallet browser extension           | https://metamask.io/                      |
| Git          | Version control system                      | https://git-scm.com/                      |
| React.js     | Frontend framework (already in project)     | https://react.dev/                        |

> 💡 **Optional but Recommended:**
>
> - Experience with **Java** or **Python** (for extended backend logic)
> - Familiarity with **IPFS** for decentralized file storage
> - Knowledge of **Rafael**, **Docker**, or similar deployment tools

---

## ✅ Environment Setup Summary

Before running this project, make sure to:

1. Install **Node.js** and **npm**
2. Install **Truffle** globally:
   ```bash
   npm install -g truffle
Download and start Ganache

Install MetaMask extension in your browser

Configure MetaMask to connect to Ganache’s local blockchain

Clone the project and follow the installation steps below

⚙️ Installation
bash
Copy
Edit
# Clone the repository
git clone https://github.com/your-username/decentralized-voting.git
cd decentralized-voting

# Install dependencies
npm install

# Compile smart contracts
truffle compile

# Start Ganache and migrate contracts
truffle migrate

# Run the development server
npm start
🚀 Usage
Launch the app in your browser

Connect MetaMask wallet

Register as a voter (admin approval required)

Cast your vote during the voting phase

View results once voting ends

🧠 Smart Contract Overview
solidity
Copy
Edit
contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public hasVoted;

    function vote(uint candidateId) public {
        require(!hasVoted[msg.sender], "Already voted");
        hasVoted[msg.sender] = true;
        candidates[candidateId].voteCount++;
    }
}
📸 Screenshots
Add your screenshots here – login page, voting dashboard, results view, etc.

Example:

markdown
Copy
Edit
![Login Page](assets/login-page.png)
![Dashboard](assets/dashboard.png)
🔧 Future Improvements
Integration with real-world identity verification (Aadhaar, Passport)

DAO-style governance for elections

Multi-phase elections (Primaries, General)

Mobile App version

Deployment on Ethereum Mainnet or Layer 2

👨‍💻 Contributors
[VISHNU KUMAR D S Name] – Blockchain Peoject

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

yaml
Copy
Edit
