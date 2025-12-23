import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployedEncryptedSponsorDeal = await deploy("EncryptedSponsorDeal", {
    from: deployer,
    log: true,
  });

  console.log(`EncryptedSponsorDeal contract: `, deployedEncryptedSponsorDeal.address);
};

export default func;
func.id = "deploy_encryptedSponsorDeal";
func.tags = ["EncryptedSponsorDeal"];
