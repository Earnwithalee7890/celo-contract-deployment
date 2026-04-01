# Celo Contract Deployment

A Hardhat project configured for deploying Solidity smart contracts to Celo Mainnet.

## 📋 Overview

This project provides a complete setup for deploying smart contracts to the Celo blockchain using Hardhat. It includes configuration, deployment scripts, and examples.

## 🚀 Features

- ✅ Pre-configured for Celo Mainnet
- ✅ Automated deployment scripts
- ✅ Environment variable management
- ✅ Sample smart contract included
- ✅ Batch deployment support

## 📦 Installation

```bash
npm install
```

## ⚙️ Configuration

1. Copy the `.env` file and add your private key:
```bash
PRIVATE_KEY=your_private_key_here
```

> **⚠️ Security Warning**: Never commit your `.env` file or share your private key!

## 🔧 Usage

### Compile Contracts
```bash
npx hardhat compile
```

### Deploy to Celo Mainnet
```bash
npx hardhat run scripts/deploy.js --network celo
```

## 📝 Contract Details

- **Contract**: MyContract.sol
- **Network**: Celo Mainnet
- **Chain ID**: 42220
- **RPC URL**: https://forno.celo.org

## 📊 Deployment History

### Total Deployments
- **Batch 1**: 10 contracts ✅
- **Batch 2**: 68 contracts ✅
- **Batch 3**: 80 contracts ✅
- **Total**: 158+ contracts deployed

## 🔗 Useful Links

- [Celo Explorer](https://explorer.celo.org/mainnet/)
- [Celo Documentation](https://docs.celo.org/)
- [Hardhat Documentation](https://hardhat.org/docs)

## 📄 License

ISC

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
<!-- Update: feat: initialize core contract hierarchy -->
<!-- Update: feat: initialize core contract hierarchy -->
<!-- Update: chore: update hardhat configuration for Celo Mainnet -->
