import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import OmniChainNFTInterface from "./OmniChainNFT.json";

export default function useGetPowerOfSpaceship(
  contractAddress,
  tokenId,
  chainId
) {
  const { value, error } =
    useCall(
      contractAddress && {
        contract: new Contract(contractAddress, OmniChainNFTInterface.abi), // instance of called contract
        method: "fleetPowers",
        arg: [tokenId],
      },
      chainId
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }
  return value?.[0];
}
