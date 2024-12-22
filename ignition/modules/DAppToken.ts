import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import * as dotenv from "dotenv";


dotenv.config();  

const DAppToken = buildModule("DAppTokenModule", (m) => {
  const initialOwner = process.env.INITIAL_OWNER || "0x281d16770B8Daf2a55e1C98Da04C69e98CD3E80B"; // Dirección predeterminada si no se establece la variable de entorno

  const token = m.contract("DAppToken", [initialOwner]);

  return { token };
});

export default DAppToken;
