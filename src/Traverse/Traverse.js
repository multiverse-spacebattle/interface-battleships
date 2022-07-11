import { useState } from "react";
import { ethers } from "ethers";
import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";

import { useContractWrite } from "wagmi";
import OmniChainNFT from "../Utils/OmniChainNFT.json";
import chainIdToOmnichainNFTContract from "../Utils/chainIdToOmnichainNFTContract";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";
import chainIdToBridgeIdMapping from "../Utils/chainIdToBridgeIdMapping";

function Traverse({
  chainId = { network: 4 },
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);
  const [portal, setPortal] = useState(null);

  const traverse = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "crossChain",
    overrides: {
      value: ethers.utils.parseEther("3"),
    },
    args: [
      chainIdToBridgeIdMapping[portal],
      chainIdToOmnichainNFTContract[portal],
      userSpaceshipSelection,
      0,
    ],
  });
  const getUserSpaceships = () => {
    if (chainId.id === 4002) {
      return fantomTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 43113) {
      return avalancheTestnetTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 97) {
      return binanceTestnetTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 4) {
      return rinkebyTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    } else if (chainId.id === 80001) {
      return mumbaiTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            setUserSpaceshipSelection={setUserSpaceshipSelection}
            userSpaceshipSelection={userSpaceshipSelection}
            details={element}
            setUserSpaceshipDetails={setUserSpaceshipDetails}
            key={index}
          />
        );
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-neutral-800">
      <div className="flex flex-row">
        <div className="border border-black">
          <img src={"./illustration 2.png"}></img>
        </div>
      </div>
      <div className="w-full h-12 border-800 mt-5  my-2 p-2">
        Here are your Spaceships on{" "}
        <span className="text-amber-500">
          {chainId && chainIdToNameMapping[chainId.network]}
        </span>
        . Change your network to view your spaceships on other chains.
      </div>
      <div className="flex flex-row w-full border border-black bg-neutral-500 h-40 overflow-x-auto">
        {chainId && getUserSpaceships()}
      </div>
      <div className="w-full h-full mb-5">
        <div className="px-2 my-2">
          Travel from{" "}
          <span className="text-amber-500">
            {chainIdToNameMapping[chainId.id]}
          </span>{" "}
          to{" "}
          <span className="text-blue-500">{chainIdToNameMapping[portal]}</span>{" "}
          Galaxy
        </div>
        <div className="flex flex-row w-full items-center justify-around">
          <div
            className={
              portal === 4
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal(4)}
          >
            <img src="./portal1.png" className="rounded-2xl"></img>
            <div>Ethereum</div>
          </div>
          <div
            className={
              portal === 80001
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal(80001)}
          >
            <img src="./portal2.png" className="rounded-2xl"></img>
            <div>Polygon</div>
          </div>
          <div
            className={
              portal === 43113
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal(43113)}
          >
            <img src="./portal3.png" className="rounded-2xl"></img>
            <div>Avalanche</div>
          </div>
          <div
            className={
              portal === 97
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal(97)}
          >
            <img src="./portal4.png" className="rounded-2xl"></img>
            <div>Binance</div>
          </div>
          <div
            className={
              portal === 4002
                ? "h-24 w-24 rounded-2xl border border-blue-400 border-4 cursor-pointer"
                : "h-24 w-24 rounded-2xl cursor-pointer"
            }
            onClick={() => setPortal(4002)}
          >
            <img src="./portal5.png" className="rounded-2xl"></img>
            <div>Fantom</div>
          </div>
        </div>
        {/* <div className="flex flex-row w-full mt-5  items-center justify-center mt-5">
          <div className="border border-black mx-5">
            {chainIdToNameMapping[chainId.id]}
          </div>
          <div className="border border-black mx-5">to</div>
          <div className="border border-black mx-5">
            {chainIdToNameMapping[portal]}
          </div>
        </div> */}
      </div>
      <div className="flex flex-row w-full justify-center items-center my-5">
        <button
          className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
          onClick={() => traverse.write()}
        >
          Traverse
        </button>
      </div>
    </div>
  );
}

export default Traverse;
