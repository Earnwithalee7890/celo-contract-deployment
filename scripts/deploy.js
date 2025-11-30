const hre = require("hardhat");

async function main() {
    console.log("Deploying 1 contract to Celo Mainnet...");

    const Contract = await hre.ethers.getContractFactory("MyContract");

    for (let i = 0; i < 1; i++) {
        const contract = await Contract.deploy(`Hello Celo ${i + 1}!`);
        await contract.waitForDeployment();
        console.log(`Contract ${i + 1} deployed at:`, await contract.getAddress());
        // Wait 5 seconds to avoid nonce issues
        await new Promise(r => setTimeout(r, 5000));
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
