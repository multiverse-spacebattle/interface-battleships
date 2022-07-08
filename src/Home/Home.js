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

function Home({ chainId, userAddress }) {
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
      <div className=""> Account:</div>
      <div className="inline">
        {/* <AccountIcon account={address} /> */}
        &nbsp;
        <div className="">{address}</div>
      </div>
      <br />
      <div className="">
        fantomTestnet TokenIds:
        <p className="bold">
          {fantomTokenIds
            ? fantomTokenIds.map((val) => val.toNumber()).join(", ")
            : null}
        </p>
      </div>
      <div className="">
        avalancheTestnet TokenIds:
        <p className="">
          {avalancheTestnetTokenIds
            ? avalancheTestnetTokenIds.map((val) => val.toNumber()).join(", ")
            : null}
        </p>
      </div>
      <div className="">
        user fantomTestnet TokenIds:
        <p className="bold">
          {fantomTokenIdsOfUser
            ? fantomTokenIdsOfUser.map((val) => val.toNumber()).join(", ")
            : null}
        </p>
      </div>
      <div className="">
        user avalancheTestnet TokenIds:
        <p className="">
          {avalancheTestnetTokenIdsOfUser
            ? avalancheTestnetTokenIdsOfUser
                .map((val) => val.toNumber())
                .join(", ")
            : null}
        </p>
      </div>
      <div className="">
        Balance on fantomTestnet Testnet:
        <p className="">
          {fantomTestnetBalance && formatEther(fantomTestnetBalance)} FTM
        </p>
      </div>
      <div className="">
        Balance on Avalanche Testnet:
        <p className="">
          {avalancheTestnetBalance && formatEther(avalancheTestnetBalance)} AVAX
        </p>
      </div>
      <div className="balnce">
        Balance on Polygon Testnet:
        <p className="">{mumbaiBalance && formatEther(mumbaiBalance)} MATIC</p>
      </div>
      <div>Welcome to the cross-chain pvp spaceship game</div>
      {chainId === undefined ? (
        <div className="flex flex-col w-full items-center">
          Please connect to your wallet to get started!
        </div>
      ) : (
        <div className="flex flex-col w-full items-center">
          <div>You currently have 7 spaceships across 5 chains</div>
          <div>Ethereum: 1 spaceship</div>
          <div>Polygon: 1 spaceship</div>
          <div>Binance: 1 spaceship</div>
          <div>Avalanche: 2 spaceship</div>
          <div>Fantom: 2 spaceship</div>
          <div>
            You can mint your spaceship across any layer 1/2. Your NFT will be
            minted on {chainIdToNameMapping[chainId]}
          </div>
          <div>
            If you wish to mint on a different chain, please switch your network
          </div>
          <button className="border border-black w-20">Mint</button>{" "}
        </div>
      )}
    </div>
  );
}

export default Home;
