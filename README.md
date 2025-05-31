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
