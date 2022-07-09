import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import ViewFunctionsInterface from "./ViewFunctions.json";

export default function useGetAllSpaceships(contractAddress, chainId) {
  const { value, error } =
    useCall(
      contractAddress && {
        contract: new Contract(contractAddress, ViewFunctionsInterface.abi), // instance of called contract
        method: "getAllSpaceships",
      },
      chainId
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  const spaceships = [];
  if (value) {
    for (let i = 0; i < value[0].length; i++) {
      spaceships.push({
        tokenId: value[0][i].toNumber(),
        power: value[1][i].toNumber(),
        resource: value[2][i].toNumber(),
        missiles: value[3][i].toNumber(),
        shields: value[4][i].toNumber(),
        staked: value[5][i],
        inBattle: value[6][i],
      });
    }
  }
  return spaceships;
}
