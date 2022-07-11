import {
  // Config,
  DAppProvider,
  AvalancheTestnet,
  FantomTestnet,
  Mumbai,
  useEtherBalance,
  useCall,
} from "@usedapp/core";

import { useContractWrite } from "wagmi";

import { ethers } from "ethers";

import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import OmniChainNFT from "../Utils/OmniChainNFT.json";

import OmniChainNFTInterface from "../Hooks/OmniChainNFT.json";
import useGetAllSpaceships from "../Hooks/useGetAllSpaceships";
import useGetAllSpaceshipsByOwner from "../Hooks/useGetAllSpaceshipsByOwner";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";
import chainIdToOmnichainNFTContract from "../Utils/chainIdToOmnichainNFTContract";
import { formatEther } from "@ethersproject/units";

function Home({
  chainId,
  address,
  userEthereumSpaceships = 0,
  userPolygonSpaceships = 0,
  userBinanceSpaceships = 0,
  userAvalancheSpaceships = 0,
  userFantomSpaceships = 0,
}) {
  const { data, isError, isLoading, write } = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "mint",
    overrides: {
      value: ethers.utils.parseEther("0.001"),
    },
  });

  const fantomTestnetBalance = useEtherBalance(address, {
    chainId: FantomTestnet.chainId,
  });
  const avalancheTestnetBalance = useEtherBalance(address, {
    chainId: AvalancheTestnet.chainId,
  });
  const mumbaiBalance = useEtherBalance(address, {
    chainId: Mumbai.chainId,
  });

  return (
    <div className="flex flex-col w-full items-center bg-neutral-800 h-full">
      <div className="text-2xl text-amber-600 mt-10">
        Welcome to the first cross-chain battle royal game!
      </div>
      <img className="w-48 h-48" src="./level3.png"></img>
      {chainId === undefined ? (
        <div className="flex flex-col w-full items-center text-white">
          Please connect to your wallet to get started!
        </div>
      ) : (
        <div className="flex flex-col w-full items-center text-white">
          <div className="mt-5">
            You currently have{" "}
            {userEthereumSpaceships +
              userPolygonSpaceships +
              userBinanceSpaceships +
              userAvalancheSpaceships +
              userFantomSpaceships}{" "}
            spaceships across 5 networks:
          </div>
          <div className="text-sm">
            Ethereum: {userEthereumSpaceships} {"spaceship(s)"}
          </div>
          <div className="text-sm">
            Polygon: {userPolygonSpaceships} {"spaceship(s)"}
          </div>
          <div className="text-sm">
            Binance: {userBinanceSpaceships} {"spaceship(s)"}
          </div>
          <div className="text-sm">
            Avalanche: {userAvalancheSpaceships} {"spaceship(s)"}
          </div>
          <div className="text-sm">
            Fantom: {userFantomSpaceships} {"spaceship(s)"}
          </div>
          <div className="mt-5">
            Your NFT will be minted on{" "}
            <span className="text-amber-400">
              {chainIdToNameMapping[chainId.network]}
            </span>
            .
          </div>
          <div className="mb-5">
            If you wish to mint on a different chain, please switch your
            network.
          </div>
          <button
            className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded mb-10"
            onClick={() => write()}
          >
            Mint
          </button>{" "}
          {/* <div className="">
            Balance on fantomTestnet Testnet:
            <p className="">
              {fantomTestnetBalance && formatEther(fantomTestnetBalance)} FTM
            </p>
          </div>
          <div className="">
            Balance on Avalanche Testnet:
            <p className="">
              {avalancheTestnetBalance && formatEther(avalancheTestnetBalance)}{" "}
              AVAX
            </p>
          </div>
          <div className="balnce">
            Balance on Polygon Testnet:
            <p className="">
              {mumbaiBalance && formatEther(mumbaiBalance)} MATIC
            </p>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Home;
