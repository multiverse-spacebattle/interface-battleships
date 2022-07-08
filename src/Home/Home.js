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
import useAllSpaceships from "../Hooks/useAllSpaceships";

import { getDefaultProvider, Contract } from "ethers";
import { formatEther } from "@ethersproject/units";

const address = "0x5FfEd2963eb6657B583e34C64363fDD74CF889fD";

const config: Config = {
  readOnlyUrls: {
    [FantomTestnet.chainId]: "https://rpc.testnet.fantom.network",
    [AvalancheTestnet.chainId]: "https://api.avax-test.network/ext/bc/C/rpc",
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com",
    [Mumbai.chainId]: "https://rpc-mumbai.maticvigil.com",
  },
};

const chainIdToImageMapping = {
  1: "./3-Blue_640x360.png",
  43113: "./3-Red_640x360.png",
  4002: "./3-Green_640x360.png",
  80001: "./3-Purple_640x360.png",
};

const chainIdToNameMapping = {
  1: "Ethereum",
  43113: "Avalanche",
  4002: "Fantom",
  80001: "Polygon",
};

function Home({ chainId }) {
  const fantomTestnetBalance = useEtherBalance(address, {
    chainId: FantomTestnet.chainId,
  });
  const avalancheTestnetBalance = useEtherBalance(address, {
    chainId: AvalancheTestnet.chainId,
  });
  const mumbaiBalance = useEtherBalance(address, {
    chainId: Mumbai.chainId,
  });

  const fantomTokenIds = useAllSpaceships(
    "0x46f69DbE78a313E33287f1F15C4fE19Fb2a3C2a7",
    {
      chainId: FantomTestnet.chainId,
    }
  );

  const avalancheTestnetTokenIds = useAllSpaceships(
    "0xAedB1077E9838d52Bd4c10AbB4AcA8F106A912F2",
    {
      chainId: AvalancheTestnet.chainId,
    }
  );

  // function useAllSpaceships(contractAddress) {
  //   // debugger;
  //   console.log(FantomTestnet.chainId);
  //   const { value, error } =
  //     useCall(
  //       contractAddress && {
  //         contract: new Contract(contractAddress, OmniChainNFTInterface.abi), // instance of called contract
  //         method: "getAllSpaceships",
  //         args: [], // Method to be called
  //         // chainId: FantomTestnet.chainId,
  //       },
  //       {
  //         chainId: FantomTestnet.chainId,
  //       }
  //     ) ?? {};
  //   if (error) {
  //     console.error(error.message);
  //     return undefined;
  //   }
  //   return value?.[0];
  // }

  return (
    <div className="flex flex-col w-full items-center">
      <div className="balance"> Account:</div>
      <div className="inline">
        {/* <AccountIcon account={address} /> */}
        &nbsp;
        <div className="account">{address}</div>
      </div>
      <br />
      <div className="balance">
        fantomTestnet TokenIds:
        <p className="bold">
          {fantomTokenIds
            ? fantomTokenIds.map((val) => val.toNumber()).join(", ")
            : null}
        </p>
      </div>
      <div className="balance">
        avalancheTestnet TokenIds:
        <p className="bold">
          {avalancheTestnetTokenIds
            ? avalancheTestnetTokenIds.map((val) => val.toNumber()).join(", ")
            : null}
        </p>
      </div>
      <div className="balance">
        Balance on fantomTestnet Testnet:
        <p className="bold">
          {fantomTestnetBalance && formatEther(fantomTestnetBalance)} FTM
        </p>
      </div>
      <div className="balance">
        Balance on Avalanche Testnet:
        <p className="bold">
          {avalancheTestnetBalance && formatEther(avalancheTestnetBalance)} AVAX
        </p>
      </div>
      <div className="balance">
        Balance on Polygon Testnet:
        <p className="bold">
          {mumbaiBalance && formatEther(mumbaiBalance)} MATIC
        </p>
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
