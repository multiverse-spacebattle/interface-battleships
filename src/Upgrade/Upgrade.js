import { useState } from "react";
import SpaceshipProfile from "../SpaceshipProfile/SpaceshipProfile";

import { useContractWrite } from "wagmi";
import { ethers } from "ethers";
import OmniChainNFT from "../Utils/OmniChainNFT.json";
import chainIdToOmnichainNFTContract from "../Utils/chainIdToOmnichainNFTContract";

function Upgrade({
  chainId,
  fantomTokenIdsOfUser = [],
  avalancheTestnetTokenIdsOfUser = [],
  rinkebyTokenIdsOfUser = [],
  binanceTestnetTokenIdsOfUser = [],
  mumbaiTokenIdsOfUser = [],
}) {
  const [userSpaceshipSelection, setUserSpaceshipSelection] = useState(null);
  const [userSpaceshipDetails, setUserSpaceshipDetails] = useState(null);
  const [itemSelection, setItemSelection] = useState(null);

  const [quantity, setQuantity] = useState(0);

  const itemMapping = {
    Upgrade: 0,
    Missile: 1,
    Shield: 2,
  };

  const buyStuff = useContractWrite({
    addressOrName: chainIdToOmnichainNFTContract[chainId.network],
    contractInterface: OmniChainNFT.abi,
    functionName: "buyStuff",
    args: [
      Number(quantity),
      itemMapping[itemSelection],
      userSpaceshipSelection,
    ],
  });

  console.log([quantity, itemMapping[itemSelection], userSpaceshipSelection]);

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
        <div className="w-2/4 h-96 border border-black">
          <div
            className={
              itemSelection === "Upgrade"
                ? "border border-blue-400 border-4 w-24 h-24 m-2 items-center justify-center cursor-pointer"
                : "w-24 h-24 m-2 items-center justify-center cursor-pointer"
            }
            onClick={() => setItemSelection("Upgrade")}
          >
            <img src="./upgrade.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Upgrade</div>
          </div>
          <div>Evolutions</div>
          <div className="flex flex-row">
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level1.png" className="border"></img>
              <div className="w-full text-center">Level 1</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level2.png" className="border"></img>
              <div className="w-full text-center">Level 2</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level3.png" className="border"></img>
              <div className="w-full text-center">Level 3</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level4.png" className="border"></img>
              <div className="w-full text-center">Level 4</div>
            </div>
            <div className="w-32 h-32 m-2 items-center justify-center">
              <img src="./level5.png" className="border"></img>
              <div className="w-full text-center">Level 5</div>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-96 border border-black flex flex-row">
          <div
            className={
              itemSelection === "Missile"
                ? "border border-blue-400 border-4 w-24 h-24 m-2 items-center justify-center cursor-pointer"
                : "w-24 h-24 m-2 items-center justify-center cursor-pointer"
            }
            onClick={() => setItemSelection("Missile")}
          >
            <img src="./missile.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Missile</div>
          </div>
          <div
            className={
              itemSelection === "Shield"
                ? "border border-blue-400 border-4 w-24 h-24 m-2 items-center justify-center cursor-pointer"
                : "w-24 h-24 m-2 items-center justify-center cursor-pointer"
            }
            onClick={() => setItemSelection("Shield")}
          >
            <img src="./bubble.png" className="border rounded-2xl"></img>
            <div className="w-full text-center">Shield</div>
          </div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <label className="form-label inline-block mb-2 text-gray-700">
                Quantity
              </label>
              <input
                type="text"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                id="exampleFormControlInput1"
                placeholder="Quantity"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full border border-black h-40 flex-wrap overflow-x-auto">
        {chainId && getUserSpaceships()}
      </div>
      <div className="flex flex-row w-full h-24 border border-black justify-center items-center">
        <button
          className="bg-transparent hover:bg-amber-700 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-700 hover:border-transparent rounded"
          onClick={() => buyStuff.write()}
        >
          Purchase
        </button>
      </div>
      <div className="w-full flex flex-row justify-center"></div>
    </div>
  );
}

export default Upgrade;
