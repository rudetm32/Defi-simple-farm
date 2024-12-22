import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// Aceptamos las direcciones de DAppToken y LPToken como parámetros
const TokenFarm = buildModule("TokenFarmModule", (m) => {
  const dappTokenAddress = m.getParameter("dappTokenAddress");
  const lpTokenAddress = m.getParameter("lpTokenAddress");

  // Desplegamos el contrato TokenFarm pasando las direcciones de DAppToken y LPToken
  const tokenFarm = m.contract("TokenFarm", ["0x359CE0dC9328c4Fb0b2340Aa2a60ABd443B17a39", "0xa4d5F229cebe1E280E7DBb0A46389d8D3245a644"]);

  return { tokenFarm };
});

export default TokenFarm;


