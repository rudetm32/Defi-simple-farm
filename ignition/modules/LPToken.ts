import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const LPToken = buildModule("LPTokenModule", (m) => {
  // Usar dirección de entorno o una dirección predeterminada
  const initialOwner = process.env.LP_INITIAL_OWNER || "0x0000000000000000000000000000000000000000";

  // Validar que la dirección no esté vacía
  if (initialOwner === "0x0000000000000000000000000000000000000000") {
    throw new Error("La dirección del propietario de LPToken no está configurada. Configura LP_INITIAL_OWNER en un archivo .env.");
  }

  const lpToken = m.contract("LPToken", [initialOwner]);

  return { lpToken };
});

export default LPToken;
