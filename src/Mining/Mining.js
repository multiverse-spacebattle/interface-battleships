import { useState } from "react";
import { useContractWrite } from "wagmi";

import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";
import chainIdToImageMapping from "../Utils/chainIdToImageMapping";
import chainIdToNameMapping from "../Utils/chainIdToNameMapping";

import { ethers } from "ethers";
import OmniChainNFT from "../Utils/OmniChainNFT.json";
import chainIdToOmnichainNFTContract from "../Utils/chainIdToOmnichainNFTContract";

function Mining({
  chainId = { id: 4, network: 4 },
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);

  const { data, isError, isLoading, write } = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "stake",
    args: [userSpaceshipSelection],
  });

  const unstake = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "unstake",
    args: [userSpaceshipSelection],
  });

  const claim = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "claim",
    args: [userSpaceshipSelection],
  });

  const getUserSpaceships = () => {
    if (chainId.id === 4002) {
      return fantomTokenIdsOfUser.map((element, index) => {
        return (
          <SpaceshipProfile
            chainId={chainId}
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
            chainId={chainId}
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
            chainId={chainId}
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
            chainId={chainId}
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
            chainId={chainId}
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
        <div className="w-3/4 border border-black">
          <img src="./illustration 3.png"></img>
        </div>
        <div className="w-1/4 border border-black bg-neutral-800">
          <img src={chainIdToImageMapping[chainId.network]}></img>
          Galaxy: {chainIdToNameMapping[chainId.network]}
          <div>Number of Spaceships: 21</div>
          <div>Number of Stakers: 10</div>
          <div>Mining Rate: 6 Resource / day</div>
          <div className="text-amber-500">
            Staking will lower your power by 20%, making you more vulnerable to
            attacks
          </div>
        </div>
      </div>
      <div className="w-full h-12 border-800 mt-5 my-2 p-2">
        Here are your Spaceships on{" "}
        <span className="text-amber-500">
          {chainId && chainIdToNameMapping[chainId.network]}
        </span>
        . Change your network to view your spaceships on other chains.
      </div>
      <div className="flex flex-row w-full border border-black h-40 overflow-x-auto bg-neutral-500">
        {chainId && getUserSpaceships()}
      </div>
      <div className="w-full flex flex-row justify-center">
        {userSpaceshipDetails && userSpaceshipDetails.staked ? (
          <div>
            {" "}
            <button
              className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
              onClick={() => claim.write()}
            >
              Claim
            </button>
            <button
              className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
              onClick={() => unstake.write()}
            >
              Unstake
            </button>
          </div>
        ) : (
          <button
            className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
            onClick={() => write()}
          >
            Stake
          </button>
        )}
      </div>
    </div>
  );
}

export default Mining;
