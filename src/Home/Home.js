import {
  Config,
  DAppProvider,
  AvalancheTestnet,
  FantomTestnet,
  Mumbai,
  useEtherBalance,
  useCall,
} from "@usedapp/core";

import OmniChainNFTInterface from "../Hooks/OmniChainNFT.json";
import useGetAllSpaceships from "../Hooks/useGetAllSpaceships";
import useGetAllSpaceshipsByOwner from "../Hooks/useGetAllSpaceshipsByOwner";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

import { getDefaultProvider, Contract } from "ethers";
import { formatEther } from "@ethersproject/units";

const address = "0x5FfEd2963eb6657B583e34C64363fDD74CF889fD";

const config: Config = {
  readOnlyUrls: {
    [FantomTestnet.chainId]: "https://rpc.testnet.fantom.network",
    [AvalancheTestnet.chainId]: "https://api.avax-test.network/ext/bc/C/rpc",
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com",
  },
};

function Home({
  chainId,
  userAddress,
  userEthereumSpaceships = 0,
  userPolygonSpaceships = 0,
  userBinanceSpaceships = 0,
  userAvalancheSpaceships = 0,
  userFantomSpaceships = 0,
}) {
  const fantomTestnetBalance = useEtherBalance(address, {
    chainId: FantomTestnet.chainId,
  });
  const avalancheTestnetBalance = useEtherBalance(address, {
    chainId: AvalancheTestnet.chainId,
  });
  const mumbaiBalance = useEtherBalance(address, {
    chainId: Mumbai.chainId,
  });

  const fantomTokenIds = useGetAllSpaceships(
    "0x46f69DbE78a313E33287f1F15C4fE19Fb2a3C2a7",
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIds = useGetAllSpaceships(
    "0xAedB1077E9838d52Bd4c10AbB4AcA8F106A912F2",
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  const fantomTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0x46f69DbE78a313E33287f1F15C4fE19Fb2a3C2a7",
    userAddress,
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIdsOfUser = useGetAllSpaceshipsByOwner(
    "0xAedB1077E9838d52Bd4c10AbB4AcA8F106A912F2",
    userAddress,
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  return (
    <div className="flex flex-col w-full items-center">
      <div>Welcome to the cross-chain pvp spaceship game</div>
      {chainId === undefined ? (
        <div className="flex flex-col w-full items-center">
          Please connect to your wallet to get started!
        </div>
      ) : (
        <div className="flex flex-col w-full items-center">
          <div>
            You currently have{" "}
            {userEthereumSpaceships +
              userPolygonSpaceships +
              userBinanceSpaceships +
              userAvalancheSpaceships +
              userFantomSpaceships}{" "}
            spaceships across 5 networks
          </div>
          <div>Ethereum: {userEthereumSpaceships} spaceship</div>
          <div>Polygon: {userPolygonSpaceships} spaceship</div>
          <div>Binance: {userBinanceSpaceships} spaceship</div>
          <div>Avalanche: {userAvalancheSpaceships} spaceship</div>
          <div>Fantom: {userFantomSpaceships} spaceship</div>
          <div>
            You can mint spaceships across any network. Your NFT will be minted
            on {chainIdToNameMapping[chainId]}.
          </div>
          <div>
            If you wish to mint on a different chain, please switch your
            network.
          </div>
          <button className="border border-black w-20">Mint</button>{" "}
          <div className="">
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
