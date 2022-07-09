import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import ViewFunctionsInterface from "./ViewFunctions.json";

export default function useGetAllSpaceshipsByOwner(
  contractAddress,
  address,
  chainId
) {
  const { value, error } =
    useCall(
      contractAddress && {
        contract: new Contract(contractAddress, ViewFunctionsInterface.abi), // instance of called contract
        method: "getSpaceshipsByOwner",
        args: [address], // Method to be called
      },
      chainId
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}
